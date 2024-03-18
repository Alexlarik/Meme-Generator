'use strict'

let gElCanvas
let gCtx
let gColor
let gFontSize = '20px'

function onInit() {
    createId()
    renderMemes()
    gElCanvas = document.querySelector('canvas')
    gCtx = gElCanvas.getContext('2d')

}

function pickColor() {
    var elColor = document.querySelector('.color')
    gColor = elColor.value

    const meme = getMeme(selectedMemeId)
    setLineTxt(meme)

    console.log(gColor)
}

function pickFont() {

    const fontSize = prompt('Enter font size:')
    gFontSize = fontSize + 'px'

    const meme = getMeme(selectedMemeId)
    setLineTxt(meme)

    console.log(gFontSize)
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

    gCtx.font = gFontSize + ' Times New Roman'
    gCtx.textAlign = 'center'
    gCtx.textBaseline = 'center'

    gCtx.fillText(text, x, y)
    gCtx.strokeText(text, x, y)

}