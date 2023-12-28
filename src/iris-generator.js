import {
    random,
    seedPRNG,
    spline,
    pointsInPath,
} from '@georgedoescode/generative-utils'

import simpliy from 'simplify-js';

import { mySettings } from './settingsManager.js'
const settings = _settingsInit()

// export the svgGenerator function
export function svgGenerator(svgObj) {
    // clear the existing svg of any elements
    svgObj.clear()

    // get the width and height of the svg canvas
  const { width, height } = svgObj.viewbox();



    const debug = settings.debug ?? false

    // If the resetSeed toggle is checked (true), or if there is no seed value assigned
    if (settings.resetSeed || !settings.seedValue) {
        // create a new random seed number
        let myseed = Math.floor(Math.random() * 10000000)
        // assign the seed value to the settings object`
        settings.seedValue = myseed
        // set the seed for the PRNG
        seedPRNG(myseed)
    } else if (settings.seedValue) {
        // set the seed for the PRNG
        seedPRNG(settings.seedValue)
    }

    // This is where the custom code begins

    // find the center of the canvas
    const centerX = width / 2
    const centerY = height / 2
    const radius = height / 2.5

    // Get the number of points to draw from the settings object or use the default value of 500
    let numPoints = settings.numPoints ?? 4

    // An array to hold the points
    let points = []
    // loop through the number of points we want to draw
    for (let i = 0; i < numPoints; i++) {
        // get a random angle between 0 and 2PI
        const angle = random(0, Math.PI * 2)
        // get a random radius between 0 and the radius of the circle
        const r = random(0, radius)
        // get the x and y coordinates of the point
        const x = centerX + r * Math.cos(angle)
        const y = centerY + r * Math.sin(angle)

        // add the point to the points array
        points.push({ x, y })
    }

  // simplify the points
  points = simpliy(points, 50, true)

    const ovalPoints = _calculateCentersortPointsIntoOval(points, false)

    // draw the points
    if (debug) {
        ovalPoints.forEach((point) => {
            svgObj.circle(20).center(point.x, point.y).fill('#ccc')
        })
    }

    // draw from the first point in the ovalPoints array to the next point in the array back to the first point
    if (debug) {
        for (let i = 0; i < ovalPoints.length; i++) {
            // add text number to the point
            svgObj
                .text(`${i + 1}`)
                .font({ fill: '#f06' })
                .move(ovalPoints[i].x - 4.5, ovalPoints[i].y - 9.5)

            svgObj
                .line(
                    ovalPoints[i].x,
                    ovalPoints[i].y,
                    ovalPoints[i + 1].x,
                    ovalPoints[i + 1].y
                )
                .stroke({ width: 1 })
                .stroke({ color: '#0e0' })
        }
    }

    // using spline, create a path from the outer points
    let pathString = spline(points, settings.tension, settings.closeLoop)

    // draw the path
    if (debug) {
        svgObj
            .path(pathString)
            .fill('rgba(0, 55, 255, 0.1)')
            .stroke({ width: 1 })
            .stroke({ color: '#333' })
    }
    // console.log(pathString)
    const pathElement = document.createElementNS(
        'http://www.w3.org/2000/svg',
        'path'
    )
    pathElement.setAttribute('d', pathString)

    // console.log('pathElement', pathElement)

    // get the points in the path; returns array of objects with x and y properties
    let pip = pointsInPath(pathElement, settings.numberOfDivisions ?? 5)

    // // draw the points in the path
    pip.forEach((point, index) => {
        // log the index of the point in the array
        console.log(index + 1)

        if (debug) {
            svgObj.text(`${index + 1}`).center(point.x, point.y - 20)
            svgObj.circle(5).center(point.x, point.y).fill('#00f')
        }
    })

  let amplitude = settings.amplitude ?? 5;
  let frequency = settings.frequency ?? 25;
  let resolution = settings.resolution ?? 100;

    // draw the points in the path with the sine wave
    let sineWavePath = sineWaveAlongPath(pathString, 5, 0.5)
    // sineWavePath = sineWaveAlongPathAdvLessJagged(pathString, 5, 15, resolution)
    // sineWavePath = sineWaveAlongPathAdvOld(pathString, 3, 22, 2)
    sineWavePath = sineWaveAlongPathSmooth(pathString, amplitude, frequency, resolution)

    console.log(
        'values passed in:',
        { pathString },
        { amplitude: 5 },
        { frequency: 25 },
        { resolution: 100 }
    )

    console.log('!sineWavePath', sineWavePath)

    svgObj
        .path(sineWavePath)
        .fill('none')
        .stroke({ width: 3 })
        .stroke({ color: '#000' })

    // svgObj.path(sineWavePath).fill('none').stroke({ width: 1 }).stroke({ color: '#f00' })
}

function _calculateCenter(points) {
    let sumX = 0,
        sumY = 0
    points.forEach((point) => {
        sumX += point.x
        sumY += point.y
    })
    return { x: sumX / points.length, y: sumY / points.length }
}

function _angleFromCenter(center, point) {
    return Math.atan2(point.y - center.y, point.x - center.x)
}

function _calculateCentersortPointsIntoOval(points, closeLoop = false) {
    const center = _calculateCenter(points)

    let updatedPoints = points.sort(
        (a, b) => _angleFromCenter(center, a) - _angleFromCenter(center, b)
    )

    return updatedPoints
}

function sineWaveAlongPath(svgPathString, amplitude, frequency) {
    // Helper function to parse the SVG path string and extract points
    function parsePathString(pathStr) {
        const pathRegex = /([ML])([^ML]+)/gi
        let match
        const points = []

        while ((match = pathRegex.exec(pathStr)) !== null) {
            const [_, command, pointStr] = match
            const coords = pointStr.trim().split(/\s+|,/).map(Number)
            for (let i = 0; i < coords.length; i += 2) {
                points.push({ x: coords[i], y: coords[i + 1] })
            }
        }

        return points
    }

    // Function to calculate the normal vector
    function normalVector(p1, p2) {
        const dx = p2.x - p1.x
        const dy = p2.y - p1.y
        const length = Math.sqrt(dx * dx + dy * dy)
        return { x: -dy / length, y: dx / length }
    }

    const pathPoints = parsePathString(svgPathString)
    if (pathPoints.length < 2) return ''

    let sinePath = 'M'
    let accumulatedDistance = 0

    for (let i = 0; i < pathPoints.length - 1; i++) {
        const p1 = pathPoints[i]
        const p2 = pathPoints[i + 1]
        const normal = normalVector(p1, p2)

        const pointsAlongSegment = 20 // Adjust for smoother or coarser curves
        for (let j = 0; j <= pointsAlongSegment; j++) {
            const t = j / pointsAlongSegment
            const interpolatedPoint = {
                x: p1.x + t * (p2.x - p1.x),
                y: p1.y + t * (p2.y - p1.y),
            }

            const sineValue =
                amplitude *
                Math.sin(2 * Math.PI * frequency * accumulatedDistance)
            const wavePoint = {
                x: interpolatedPoint.x + sineValue * normal.x,
                y: interpolatedPoint.y + sineValue * normal.y,
            }
            sinePath += `${i === 0 && j === 0 ? '' : 'L'}${wavePoint.x},${
                wavePoint.y
            }`
            accumulatedDistance += 1 / pointsAlongSegment
        }
    }

    return sinePath
}


// Parse the SVG path string into points
function parsePathString(pathStr) {
    let points = []
    const commands = pathStr.match(/[MLZ][^MLZ]+/gi) || []

    commands.forEach((cmd) => {
        const coords = cmd.slice(1).trim().split(/\s+|,/).map(Number)
        for (let i = 0; i < coords.length; i += 2) {
            points.push({ x: coords[i], y: coords[i + 1] })
        }
    })
    return points
}

// Calculate the distance between two points
function distance(p1, p2) {
    return Math.sqrt((p2.x - p1.x) ** 2 + (p2.y - p1.y) ** 2)
}

// Interpolate a point on the line segment
function interpolate(p1, p2, ratio) {
    return {
        x: p1.x + (p2.x - p1.x) * ratio,
        y: p1.y + (p2.y - p1.y) * ratio,
    }
}

// Calculate the normal (perpendicular) to the line segment
function getNormal(p1, p2) {
    const dx = p2.x - p1.x
    const dy = p2.y - p1.y
    const len = Math.sqrt(dx * dx + dy * dy)
    return { x: -dy / len, y: dx / len }
}

function sineWaveAlongPathAdvJagged(
    svgPathString,
    amplitude,
    frequency,
    resolution = 100
) {
    // Helper functions: parsePathString, distance, interpolate, and getNormal
    // Ensure these are correctly implemented as in previous examples.

    let pathPoints = parsePathString(svgPathString)
    if (pathPoints.length < 2) return ''

    let totalLength = 0
    for (let i = 0; i < pathPoints.length - 1; i++) {
        totalLength += distance(pathPoints[i], pathPoints[i + 1])
    }

    let wavelength = totalLength / frequency
    let sinePath = 'M' + [pathPoints[0].x, pathPoints[0].y].join(',')
    let accumulatedLength = 0

    for (let i = 1; i < pathPoints.length; i++) {
        let segmentLength = distance(pathPoints[i - 1], pathPoints[i])
        let pointsInSegment = Math.max(
            Math.floor(resolution * (segmentLength / totalLength)),
            1
        )

        for (let j = 0; j <= pointsInSegment; j++) {
            let t = j / pointsInSegment
            let interpolatedPoint = interpolate(
                pathPoints[i - 1],
                pathPoints[i],
                t
            )
            let normal = getNormal(pathPoints[i - 1], pathPoints[i])

            let phase = ((2 * Math.PI) / wavelength) * accumulatedLength
            let sineOffset = amplitude * Math.sin(phase)

            let wavePoint = {
                x: interpolatedPoint.x + sineOffset * normal.x,
                y: interpolatedPoint.y + sineOffset * normal.y,
            }

            sinePath += 'L' + [wavePoint.x, wavePoint.y].join(',')

            accumulatedLength += segmentLength / pointsInSegment
        }
    }

    if (svgPathString.trim().endsWith('Z')) {
        sinePath += 'Z'
    }

    return sinePath
}

function sineWaveAlongPathAdvLessJagged(
    svgPathString,
    amplitude,
    frequency,
    resolution = 100
) {
    // Helper functions: parsePathString, distance, interpolate, and getNormal
    // Ensure these are correctly implemented as in previous examples.

    let pathPoints = parsePathString(svgPathString)
    if (pathPoints.length < 2) return ''

    let totalLength = 0
    let segmentLengths = []
    for (let i = 0; i < pathPoints.length - 1; i++) {
        let segLength = distance(pathPoints[i], pathPoints[i + 1])
        totalLength += segLength
        segmentLengths.push(segLength)
    }

    let wavelength = totalLength / frequency
    let sinePath = 'M' + [pathPoints[0].x, pathPoints[0].y].join(',')
    let accumulatedLength = 0

    for (let i = 1; i < pathPoints.length; i++) {
        let pointsInSegment = Math.max(
            Math.floor(resolution * (segmentLengths[i - 1] / totalLength)),
            2
        )

        for (let j = 1; j <= pointsInSegment; j++) {
            let t = j / pointsInSegment
            let interpolatedPoint = interpolate(
                pathPoints[i - 1],
                pathPoints[i],
                t
            )
            let normal = getNormal(pathPoints[i - 1], interpolatedPoint)

            let phase = ((2 * Math.PI) / wavelength) * accumulatedLength
            let sineOffset = amplitude * Math.sin(phase)

            let wavePoint = {
                x: interpolatedPoint.x + sineOffset * normal.x,
                y: interpolatedPoint.y + sineOffset * normal.y,
            }

            sinePath += 'L' + [wavePoint.x, wavePoint.y].join(',')

            accumulatedLength += distance(pathPoints[i - 1], interpolatedPoint)
        }
    }

    if (svgPathString.trim().endsWith('Z')) {
        sinePath += 'Z'
    }

    return sinePath
}

function sineWaveAlongPathSmooth(
    svgPathString,
    amplitude,
    frequency,
    resolution = 100
) {
    // Helper functions: parsePathString, distance, interpolate, and getNormal
    // Ensure these are correctly implemented as in previous examples.

    let pathPoints = parsePathString(svgPathString)
    if (pathPoints.length < 2) return ''

    let totalLength = 0
    let segmentLengths = []
    for (let i = 0; i < pathPoints.length - 1; i++) {
        let segLength = distance(pathPoints[i], pathPoints[i + 1])
        totalLength += segLength
        segmentLengths.push(segLength)
    }

    let wavelength = totalLength / frequency
    let sinePath = 'M' + [pathPoints[0].x, pathPoints[0].y].join(',')
    let accumulatedLength = 0

    for (let i = 1; i < pathPoints.length; i++) {
        let pointsInSegment = Math.max(
            Math.floor(resolution * (segmentLengths[i - 1] / totalLength)),
            2
        )

        for (let j = 1; j <= pointsInSegment; j++) {
            let t = j / pointsInSegment
            let interpolatedPoint = interpolate(
                pathPoints[i - 1],
                pathPoints[i],
                t
            )
            let normal = getNormal(pathPoints[i - 1], interpolatedPoint)

            let phase = ((2 * Math.PI) / wavelength) * accumulatedLength
            let sineOffset = amplitude * Math.sin(phase)

            let wavePoint = {
                x: interpolatedPoint.x + sineOffset * normal.x,
                y: interpolatedPoint.y + sineOffset * normal.y,
            }

            if (j === 1) {
                sinePath += 'Q' + [wavePoint.x, wavePoint.y].join(',')
            } else {
                sinePath += ' ' + [wavePoint.x, wavePoint.y].join(',')
            }

            accumulatedLength += distance(pathPoints[i - 1], interpolatedPoint)
        }
    }

    if (svgPathString.trim().endsWith('Z')) {
        sinePath += 'Z'
    }

    return sinePath
}

function toFixedNumberOfDigits(num, digits) {
    var pow = Math.pow(base || 10, digits)
    return Math.round(num * pow) / pow
}

// helper function to initialize the settings manager
// use Shoelace Web Components to create the settings UI
// https://shoelace.style/
function _settingsInit() {
    // initialize the settings manager
    mySettings.init({ settingsElement: '#settings' })

    const numPoints = {
        sltype: 'sl-input',
        name: 'numPoints',
        options: {
            label: 'Number of points',
            type: 'number',
            min: 1,
            max: 1000,
            value: 40,
            step: 1,
            size: 'medium',
            helpText: 'The number of points used to draw the tessellation.',
        },
    }

    const tension = {
        sltype: 'sl-input',
        name: 'tension',
        options: {
            label: 'Tension',
            type: 'number',
            min: 0,
            max: 10,
            value: 2.1,
            step: 0.1,
            size: 'medium',
            helpText: 'The tension of the spline.',
        },
    }

    const numberOfDivisions = {
        sltype: 'sl-input',
        name: 'numberOfDivisions',
        options: {
            label: 'Number of divisions',
            type: 'number',
            min: 5,
            max: 1000,
            value: 5,
            step: 1,
            size: 'medium',
            helpText: 'The number of points used to draw the tessellation.',
        },
    }

  const amplitude = {
        sltype: 'sl-input',
        name: 'amplitude',
        options: {
            label: 'Amplitude',
            type: 'number',
            min: 0,
            max: 100,
            value: 13,
            step: 1,
            size: 'medium',
            helpText: 'The amplitude of the sine wave.',
        },
  }

  const frequency = {
        sltype: 'sl-input',
        name: 'frequency',
        options: {
            label: 'Frequency',
            type: 'number',
            min: 0,
            max: 100,
            value: 15,
            step: 1,
            size: 'medium',
            helpText: 'The frequency of the sine wave.',
    },
  }

    const closeLoop = {
        sltype: 'sl-switch',
        name: 'closeLoop',
        options: {
            label: 'Close Loop',
            size: 'medium',
            helpText: 'Close the loop?',
            checked: true,
        },
    }

    let divider = {
        sltype: 'sl-divider',
    }

    let resetSeedToggle = {
        sltype: 'sl-switch',
        name: 'resetSeed',
        options: {
            label: 'Reset Seed Each Time?',
            size: 'medium',
            helpText: 'Reset the seed on every generation',
            checked: true,
        },
    }

    let seed = {
        sltype: 'sl-input',
        name: 'seedValue',
        options: {
            label: 'Seed Value',
            type: 'text',
            value: 1234,
            step: 1,
            size: 'medium',
            helpText: 'The seed for the random number generator.',
        },
    }

    let myDebugOptions = {
        sltype: 'sl-switch',
        name: 'debug',
        options: {
            label: 'Debug',
            size: 'medium',
            helpText: 'Show debug info',
            checked: false,
        },
    }

    // add settings to the settings manager
    mySettings.add(
        numPoints,
        tension,
      // numberOfDivisions,
      amplitude,
      frequency,
      // resolution,
        closeLoop,
        divider,
        resetSeedToggle,
        seed,
        divider,
        myDebugOptions
    )

    return mySettings
}
