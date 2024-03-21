'use strict'
////
var selectedMemeId
var gMemes = []
var gMeme = {
    selectedImgId: 1,
    selectedLineIdx: 1,
    color: 'black',
    size: '20px',
    pos_y: 2,
    pos_x: 2,
    lines: []
}
////
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

function setLineTxt() {
    const captionInput = document.querySelector('.new-caption')
    const text = captionInput.value
    // gMeme.selectedLineIdx++

    if (text !== '') {
        gCtx.clearRect(0, 0, gElCanvas.width, gElCanvas.height)
        const meme = getMeme(selectedMemeId);
        drawImg(meme)
    }
}

function onDownloadMeme(elLink) {

    elLink.href = '#'
    const dataUrl = gElCanvas.toDataURL()

    elLink.href = dataUrl
    elLink.download = 'my-img'
}