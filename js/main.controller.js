'use strict'

// var gImgs = [{ id: 1, url: 'img/1.jpg', keywords: ['funny', 'cat'] }]
// var gMeme = {
//     selectedImgId: 5,
//     selectedLineIdx: 0,
//     lines: [
//         {
//             txt: 'I sometimes eat Falafel',
//             size: 20,
//             color: 'red'
//         }
//     ]
// }
// var gKeywordSearchCountMap = { 'funny': 12, 'cat': 16, 'baby': 2 }


function drawImg(meme) {
    const elImg = meme
    gCtx.drawImage(elImg, 0, 0, gElCanvas.width, gElCanvas.height)
    drawText(prompt(), gElCanvas.width /2, gElCanvas.height / 5)
}

