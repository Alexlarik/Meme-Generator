'use strict'

let gElCanvas
let gCtx
let gColor
let gFontSize


function onInit() {
    createId()
    renderMemes()
    gElCanvas = document.querySelector('canvas')
    gCtx = gElCanvas.getContext('2d')

    gColor = gMeme.color
    gFontSize = gMeme.size

    // gElCanvas.addEventListener('mousedown', handleMouseDown);
    // gElCanvas.addEventListener('mousemove', handleMouseMove);
    // gElCanvas.addEventListener('mouseup', handleMouseUp);
    // gElCanvas.addEventListener('mouseout', handleMouseOut);


}

function drawText(text, x, y) {
    gCtx.lineWidth = 3
    gCtx.strokeStyle = gColor

    gCtx.font = gFontSize + ' Times New Roman'
    gCtx.textAlign = 'center'
    gCtx.textBaseline = 'center'

    gCtx.fillText(text, x, y)
    gCtx.strokeText(text, x, y)

}
