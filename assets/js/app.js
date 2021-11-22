const arrow = document.querySelectorAll("[data-button")
const pictureContainer = document.querySelector(".picture_container")
const captionContainer = document.querySelector(".caption_container")
const caption = document.querySelectorAll(".caption")
const showCase = document.querySelector(".show_case")
let render = 0
    captionContainer.style.top = `-${(pictureContainer.children.length - 1) * 100}vh`

const slideUp = direction => {
    const captionHeight = showCase.clientHeight
    if (direction === "up") {
        render++
        if (render > pictureContainer.children.length - 1) {
            render = 0
        }
    }
    else if (direction === "down") {
        render--
        if (render < 0) {
            render = pictureContainer.children.length - 1
        }
    }
    captionContainer.style.transform = `translateY(${render * captionHeight}px)`
    pictureContainer.style.transform = `translateY(-${render * captionHeight}px)`
}


arrow[0].addEventListener("click", () => slideUp("up"))
arrow[1].addEventListener("click", () => slideUp("down"))