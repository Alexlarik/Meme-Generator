'use strict'
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
    const meme = getMeme(id)
    drawImg(meme)
}
