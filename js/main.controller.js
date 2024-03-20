'use strict'

function drawImg(meme) {
    const elImg = new Image()
    elImg.onload = () => {
        gCtx.drawImage(elImg, 0, 0, gElCanvas.width, gElCanvas.height)
        var text = prompt('Enter Caption!')
        gMeme.lines.push(text)
        drawText(text, gElCanvas.width / 2, gElCanvas.height / 5)
    }
    // elImg.crossOrigin = 'Anonymous'
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

{/* <img src="img/1.jpg" alt="smart meme" onclick="onMemePicked(this)"></img> */ }