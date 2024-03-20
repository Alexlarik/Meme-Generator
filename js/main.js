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

}

function pickColor() {
    var elColor = document.querySelector('.color')
    gColor = elColor.value
    gMeme.color = gColor

    // const meme = getMeme(selectedMemeId)
    // setLineTxt(meme)

    console.log(gColor)
}

function pickFont() {

    const fontSize = prompt('Enter font size:')
    gFontSize = fontSize + 'px'
    gMeme.font = gFontSize

    // const meme = getMeme(selectedMemeId)
    // setLineTxt(meme)

    console.log(gFontSize)
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

function addLine() {
    var text = prompt('Enter Caption!')
    gMeme.lines.push(text)
    drawText(text, gElCanvas.width / gMeme.pos_x, gElCanvas.height / gMeme.pos_y)
    gMeme.pos_y++
    gMeme.pos_x++
    gMeme.selectedLineIdx++
    console.log(gMeme)
}
//work in progress..
function switchLine() {

}