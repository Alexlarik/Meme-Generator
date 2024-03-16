'use strict'

let gElCanvas
let gCtx

function onInit() {
    gElCanvas = document.querySelector('canvas')
    gCtx = gElCanvas.getContext('2d')

}

function drawText(text, x, y) {
    gCtx.lineWidth = 3
    gCtx.strokeStyle = 'black'

    gCtx.font = '20px Arial'
    gCtx.textAlign = 'center';
    gCtx.textBaseline = 'center';

    gCtx.fillText(text, x, y)
    gCtx.strokeText(text, x, y)

}