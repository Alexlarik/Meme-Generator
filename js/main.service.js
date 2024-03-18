'use strict'
var selectedMemeId
var gMemes = []
var gMeme = {
    selectedImgId: 1,
    selectedLineIdx: 1,
    lines: [
        {
            txt: 'Enter Text',
            size: 20,
            color: 'black'
        }
    ]
}

function getMeme(id) {
    const meme = {
        id,
        Text: '',
    }
    return meme
}

function getMemes() {
    var memes = gMemes
    return memes
}

function createId() {
    for (var i = 1; i <= 18; i++) {
        gMemes.push(getMeme(i))
    }

}

function onMemePicked(id) {
    selectedMemeId = id
    var canvas = document.querySelector('canvas')
    var gallery = document.querySelector('.grid-container')
    // var text = document.querySelector('.text')
    var set = document.querySelector('.caption')
    var download = document.querySelector('.download')
    var color = document.querySelector('.color-container')
    var font = document.querySelector('.fontSize')
    gallery.style.display = 'none'
    canvas.style.display = 'block'
    // text.style.display = 'block'
    set.style.display = 'block'
    download.style.display = 'block'
    color.style.display = 'block'
    font.style.display = 'block'

    const meme = getMeme(id)
    drawImg(meme)


}
function setLineTxt() {

    gCtx.clearRect(0, 0, gElCanvas.width, gElCanvas.height)
    const meme = getMeme(selectedMemeId)
    drawImg(meme)

}

function onDownloadMeme(elLink) {

    elLink.href = '#'
    const dataUrl = gElCanvas.toDataURL()

    elLink.href = dataUrl
    elLink.download = 'my-img'
}