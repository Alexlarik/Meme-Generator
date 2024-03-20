'use strict'
var selectedMemeId
var gMemes = []
var gMeme = {
    selectedImgId: 1,
    selectedLineIdx: 0,
    color: 'black',
    size: '20px',
    pos_y: 2,
    pos_x: 2,
    lines: []
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

function setLineTxt() {

    gCtx.clearRect(0, 0, gElCanvas.width, gElCanvas.height)
    const meme = getMeme(selectedMemeId)
    drawImg(meme)
    gMeme.lines = []
    console.log(gMeme)


}

function onDownloadMeme(elLink) {

    elLink.href = '#'
    const dataUrl = gElCanvas.toDataURL()

    elLink.href = dataUrl
    elLink.download = 'my-img'
}