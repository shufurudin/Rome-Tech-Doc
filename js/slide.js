const nextBtn = document.querySelectorAll("#right")
const prevBtn = document.querySelectorAll("#left")
const frontImg = document.querySelectorAll("#front")
const backImg = document.querySelectorAll("#back")

const imgs = [
    {
        images: ["img/slides/1/slide_1.png", "img/slides/1/slide_2.png"],
        pos: 0
    },
    {
        images: ["src/img/3.png", "src/img/2.png", "src/img/1.png"],
        pos: 0
    }
]

function next(number) {
    let {images, pos} = imgs[number]
    const currentFrontImg = frontImg[number]
    const currentBackImg = backImg[number]
    if (pos === images.length - 1) {
        return null
    } else {
        onOffBtn(number)

        pos += 1
        imgs[number].pos = pos

        currentBackImg.setAttribute("src", `${images[pos]}`)

        currentFrontImg.classList.add("transition")
        setTimeout(() => {
            slideSwitch(number, pos, pos+1)
        }, 1500);
    }
}

function prev(number) {
    let {images, pos} = imgs[number]
    const currentFrontImg = frontImg[number]
    const currentBackImg = backImg[number]

    if (pos === 0) {
        return null
    } else {
        onOffBtn(number)

        pos -= 1
        imgs[number].pos = pos

        currentBackImg.setAttribute("src", `${images[pos]}`)

        currentFrontImg.classList.add("transition")
        setTimeout(() => {
            slideSwitch(number, pos, pos-1)
        }, 1500);
    }
}

function slideSwitch(number, pos1, pos2) {
    let {images} = imgs[number]
    const currentFrontImg = frontImg[number]
    const currentBackImg = backImg[number]

    const currentNextBtn = nextBtn[number]
    const curretPrevBtn = prevBtn[number]

    onOffBtn(number)
    
    if (imgs[number].pos === imgs[number].images.length - 1 ) {
        currentFrontImg.setAttribute("src", `${images[pos1]}`)
        currentBackImg.setAttribute("src", `${images[pos1-1]}`)
        currentFrontImg.classList.remove("transition")
        currentNextBtn.toggleAttribute("disabled")
    } else if (imgs[number].pos === 0) {
        currentFrontImg.setAttribute("src", `${images[pos1]}`)
        currentBackImg.setAttribute("src", `${images[pos1+1]}`)
        currentFrontImg.classList.remove("transition")
        curretPrevBtn.toggleAttribute("disabled")
    } else {
        currentFrontImg.setAttribute("src", `${images[pos1]}`)
        currentBackImg.setAttribute("src", `${images[pos2]}`)
        currentFrontImg.classList.remove("transition")
    }
}

function onOffBtn(number) {
    const currentNextBtn = nextBtn[number]
    const currentPrevBtn = prevBtn[number]

    if (currentNextBtn.attributes.disabled && !currentPrevBtn.attributes.disabled) {
        currentPrevBtn.toggleAttribute("disabled")
    } else if (currentPrevBtn.attributes.disabled && !currentNextBtn.attributes.disabled) {
        currentNextBtn.toggleAttribute("disabled")
    } else {
        currentNextBtn.toggleAttribute("disabled")
        currentPrevBtn.toggleAttribute("disabled")
    }
}