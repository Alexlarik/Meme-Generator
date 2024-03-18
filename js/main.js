'use strict'

let gElCanvas
let gCtx
let gColor

function onInit() {
    createId()
    renderMemes()
    gElCanvas = document.querySelector('canvas')
    gCtx = gElCanvas.getContext('2d')

}

function pickColor() {
    var elColor = document.querySelector('.color')
    gColor = elColor.value
    console.log(gColor)
}
function drawText(text, x, y) {
    gCtx.lineWidth = 3
    // gCtx.fillStyle = gColor
    gCtx.strokeStyle = gColor
    // if (color = undefined) {
    // }
    // else {
    //     gCtx.strokeStyle = color
    // }

    gCtx.font = '20px Times New Roman'
    gCtx.textAlign = 'center'
    gCtx.textBaseline = 'center'

    gCtx.fillText(text, x, y)
    gCtx.strokeText(text, x, y)

}