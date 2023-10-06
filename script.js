console.log("hello world")

function domManipulation() {
    const rootElement = document.querySelector('#root')
    rootElement.innerHTML = "this is done by dom manipulation"
}

let clickCount = 0

function logClick(){
    console.log(`click: ${clickCount}`)
    clickCount++
}

window.addEventListener('load', domManipulation)           //eseményfigyelő
window.addEventListener('click', logClick)
