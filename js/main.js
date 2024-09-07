'use strict'
////
let gElCanvas
let gCtx
let gColor
let gFontSize
// let gStartPos
// let isDragging = false
// const TOUCH_EVENTS = ['touchstart', 'touchmove', 'touchend']
////

function onInit() {
    createId()
    renderMemes()
    gElCanvas = document.querySelector('canvas')
    gCtx = gElCanvas.getContext('2d')

    gColor = gMeme.color
    gFontSize = gMeme.size

    // addListeners()
    // resizeCanvas()

}

function test(){
    console.log('hi')
}
test()

function drawText(text, x, y) {
    gCtx.lineWidth = 3
    gCtx.strokeStyle = gColor

    gCtx.font = gFontSize + ' Times New Roman'
    gCtx.textAlign = 'center'
    gCtx.textBaseline = 'center'

    gCtx.fillText(text, x, y)
    gCtx.strokeText(text, x, y)

}

//drag and drop work in progress....
// function addListeners() {
//     addMouseListeners()
//     addTouchListeners()

//     window.addEventListener('resize', () => {
//         resizeCanvas()

//         drawImg()
//     })
// }

// function addMouseListeners() {
//     gElCanvas.addEventListener('mousedown', onDown)
//     gElCanvas.addEventListener('mousemove', onMove)
//     gElCanvas.addEventListener('mouseup', onUp)
// }

// function addTouchListeners() {
//     gElCanvas.addEventListener('touchstart', onDown)
//     gElCanvas.addEventListener('touchmove', onMove)
//     gElCanvas.addEventListener('touchend', onUp)
// }

// function onDown(ev) {
//     const pos = getEvPos(ev)
//     var x = gMeme.pos_x
//     var y = gMeme.pos_y
//     if (
//         pos.x >= x - gCtx.measureText(gMeme.lines).width / 2 &&
//         pos.x <= x + gCtx.measureText(gMeme.lines).width / 2 &&
//         pos.y >= y - parseInt(gFontSize) / 2 &&
//         pos.y <= y + parseInt(gFontSize) / 2
//     ) {
//         isDragging = true
//         dragOffsetX = pos.x - x
//         dragOffsetY = pos.y - y
//         document.body.style.cursor = 'grabbing'
//     }
// }

// function onMove(ev) {
//     if (!isDragging) return

//     const pos = getEvPos(ev)

//     gMeme.pos_x = pos.x - dragOffsetX
//     gMeme.pos_y = pos.y - dragOffsetY

//     redrawLines()
// }

// function onUp() {
//     isDragging = false
//     document.body.style.cursor = 'grab'
// }

// function resizeCanvas() {
//     const elContainer = document.querySelector('.canvas-container')

//     gElCanvas.width = elContainer.offsetWidth
//     gElCanvas.height = elContainer.offsetHeight
// }

// function getEvPos(ev) {
//     if (TOUCH_EVENTS.includes(ev.type)) {
//         ev.preventDefault()
//         ev = ev.changedTouches[0]

//         return {
//             x: ev.pageX - ev.target.offsetLeft - ev.target.clientLeft,
//             y: ev.pageY - ev.target.offsetTop - ev.target.clientTop,
//         }
//     } else {
//         return {
//             x: ev.offsetX,
//             y: ev.offsetY,
//         }
//     }
// }