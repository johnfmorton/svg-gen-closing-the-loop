import {
    random,
    seedPRNG,
    spline,
    pointsInPath
} from '@georgedoescode/generative-utils'

import { mySettings } from './settingsManager.js'
const settings = _settingsInit()

// export the svgGenerator function
export function svgGenerator(svgObj) {
    // clear the existing svg of any elements
    svgObj.clear()

    // get the width and height of the svg canvas
    const { width, height } = svgObj.viewbox()

    const debug = settings.debug ?? false

    // If the resetSeed toggle is checked (true), or if there is no seed value assigned
    if (settings.resetSeed || !settings.seedValue) {
        // create a new random seed number
        let myseed = Math.floor(Math.random() * 100000)
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
    const radius = height / 2

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
    svgObj
        .path(pathString)
        .fill('rgba(0, 55, 255, 0.1)')
        .stroke({ width: 1 })
        .stroke({ color: '#333' })

    console.log(pathString)
    const pathElement = document.createElementNS(
        'http://www.w3.org/2000/svg',
        'path'
    )
    pathElement.setAttribute('d', pathString)

    console.log(pathElement)

    // get the points in the path; returns array of objects with x and y properties
    let pip = pointsInPath(pathElement, settings.numberOfDivisions ?? 5)

    // // draw the points in the path
    pip.forEach((point, index) => {
        // log the index of the point in the array
        console.log(index + 1)

        if (!debug) {
            svgObj.text(`${index + 1}`).center(point.x, point.y - 20)
            svgObj.circle(5).center(point.x, point.y).fill('#00f')
        }
    })
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



  return updatedPoints;
}


function _pointsInPath(path, numPoints = 10) {
    const pathLength = path.getTotalLength()
    const step = pathLength / (numPoints - 1) // Adjusted step to account for the end point
    const points = []

    for (let i = 0; i < numPoints - 1; i++) {
        points.push(path.getPointAtLength(i * step))
    }

    // Ensure the last point is the end of the path
    points.push(path.getPointAtLength(pathLength))

    return points
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
            value: 7,
            step: 1,
            size: 'medium',
            helpText: 'The number of points used to draw the tessellation.',
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
      value: 10,
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
      value: 0.5,
      step: 0.1,
      size: 'medium',
      helpText: 'The tension of the spline.',
    },
  }

  const closeLoop = {
    sltype: 'sl-switch',
    name: 'closeLoop',
    options: {
      label: 'Close Loop',
      size: 'medium',
      helpText: 'Close the loop?',
      checked: false,
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
      numberOfDivisions,
closeLoop,
        divider,
        resetSeedToggle,
        seed,
        divider,
        myDebugOptions
    )

    return mySettings
}
