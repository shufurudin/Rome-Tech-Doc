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
        images: ["img/slides/2/slide_1.png", "img/slides/2/slide_2.png", "img/slides/2/slide_3.png", "img/slides/2/slide_4.png", "img/slides/2/slide_5.png"],
        pos: 0
    },
    {
        images: ["img/slides/3/slide_1.png", "img/slides/3/slide_2.png", "img/slides/3/slide_3.png", "img/slides/3/slide_4.png"],
        pos: 0
    },
    {
        images: ["img/slides/4/slide_1.png", "img/slides/4/slide_2.png", "img/slides/4/slide_3.png"],
        pos: 0
    },
    {
        images: ["img/slides/5/slide_2.png", "img/slides/5/slide_3.png", "img/slides/5/slide_4.png", "img/slides/5/slide_5.png", "img/slides/5/slide_6.png", "img/slides/5/slide_7.png", "img/slides/5/slide_8.png", "img/slides/5/slide_9.png", "img/slides/5/slide_10.png", "img/slides/5/slide_11.png", "img/slides/5/slide_12.png", "img/slides/5/slide_13.png", "img/slides/5/slide_14.png", "img/slides/5/slide_15.png", "img/slides/5/slide_16.png", "img/slides/5/slide_17.png", "img/slides/5/slide_18.png", "img/slides/5/slide_19.png", "img/slides/5/slide_20.png"],
        pos: 0
    },
    {
        images: ["img/slides/6/slide_1.png", "img/slides/6/slide_2.png", "img/slides/6/slide_3.png", "img/slides/6/slide_4.png", "img/slides/6/slide_5.png", "img/slides/6/slide_6.png"],
        pos: 0
    },
    {
        images: ["img/slides/7/slide_1.png", "img/slides/7/slide_2.png", "img/slides/7/slide_3.png", "img/slides/7/slide_4.png", "img/slides/7/slide_5.png", "img/slides/7/slide_6.png", "img/slides/7/slide_7.png"],
        pos: 0
    },
    {
        images: ["img/slides/8/slide_1.png", "img/slides/8/slide_2.png", "img/slides/8/slide_3.png", "img/slides/8/slide_4.png", "img/slides/8/slide_5.png", "img/slides/8/slide_6.png"],
        pos: 0
    },
    {
        images: ["img/slides/9/slide_1.png", "img/slides/9/slide_2.png", "img/slides/9/slide_3.png", "img/slides/9/slide_4.png", "img/slides/9/slide_5.png", "img/slides/9/slide_6.png"],
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