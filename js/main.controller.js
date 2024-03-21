'use strict'

function drawImg(meme) {
    const elImg = new Image()
    elImg.onload = () => {
        gCtx.drawImage(elImg, 0, 0, gElCanvas.width, gElCanvas.height)
        const captionInput = document.querySelector('.new-caption')
        const text = captionInput.value
        if (text !== '') {
            drawText(text, gElCanvas.width / 2, gElCanvas.height / 5)
            gMeme.lines = [text]
            console.log(gMeme)
            captionInput.value = ''
        }
    }
    elImg.src = `img/${meme.id}.jpg`
}

function renderMemes() {
    const elContainer = document.querySelector('.grid-container')

    const memes = getMemes()
    var html = ''
    for (var i = 0; i < memes.length; i++) {
        const id = memes[i].id
        html += `<img src="img/${id}.jpg" alt="smart meme" onclick="onMemePicked(${id})"></img>`
    }

    elContainer.innerHTML = html
}

function onMemePicked(id) {
    selectedMemeId = id
    const canvas = document.querySelector('canvas')
    const gallery = document.querySelector('.grid-container')
    const set = document.querySelector('.caption')
    const download = document.querySelector('.download')
    const color = document.querySelector('.color-container')
    const font = document.querySelector('.font-size')
    const addLine = document.querySelector('.add-line')
    const switchLine = document.querySelector('.switch-line')
    gallery.style.display = 'none'
    canvas.style.display = 'block'
    set.style.display = 'block'
    download.style.display = 'block'
    color.style.display = 'block'
    font.style.display = 'block'
    addLine.style.display = 'block'
    switchLine.style.display = 'block'

    const meme = getMeme(id)
    drawImg(meme)

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

function addLine() {
    const captionInputs = document.querySelectorAll('.caption-input')
    
    captionInputs.forEach(function(captionInput) {
        const text = captionInput.value.trim()
        if (text !== '') { 
            gMeme.lines.push(text)
            drawText(text, gElCanvas.width / gMeme.pos_x, gElCanvas.height / gMeme.pos_y)
            gMeme.pos_y++
            gMeme.pos_x++
            gMeme.selectedLineIdx++
            console.log(gMeme)
            captionInput.value = ''
        }
    })
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

{/* <img src="img/1.jpg" alt="smart meme" onclick="onMemePicked(this)"></img> */ }