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
    if (gMeme.lines.length < 2) return

    const lastLine = gMeme.lines.pop()
    gMeme.lines.splice(gMeme.selectedLineIdx - 1, 0, lastLine)
    gMeme.selectedLineIdx = gMeme.lines.length - 1

    redrawLines()
}

function redrawLines() {
    const elImg = new Image()
    elImg.onload = () => {

        gCtx.clearRect(0, 0, gElCanvas.width, gElCanvas.height)

        gCtx.drawImage(elImg, 0, 0, gElCanvas.width, gElCanvas.height)

        for (var i = 0; i < gMeme.lines.length; i++) {
            const line = gMeme.lines[i]
            const x = gElCanvas.width / gMeme.pos_x
            const y = gElCanvas.height / gMeme.pos_y + i * 40
            drawText(line, x, y)
        }
    }
    elImg.src = `img/${selectedMemeId}.jpg`
    console.log(gMeme)
}
