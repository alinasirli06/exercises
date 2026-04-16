let lampa = document.getElementById("lampa")
let yazi = document.getElementById("yazi")

let clickCount = 0
lampa.style.width = "50px"
lampa.style.height = "50px"
lampa.style.borderRadius = "50%"
lampa.style.backgroundColor = "black"
lampa.style.border = "2px solid black"

lampa.addEventListener("click",function () {
    clickCount++

    if (clickCount===1) {
        lampa.style.backgroundColor = "yellow"
    }
    else if (clickCount===2) {
        lampa.style.backgroundColor = "black"
    }
    else if (clickCount===3) {
        lampa.style.backgroundColor = "yellow"
    }
    else if (clickCount===4) {
        lampa.style.backgroundColor = "black"
    }
    else if (clickCount===5) {
        lampa.style.backgroundColor = "red"
        yazi.innerText = "lampa qirildi"
        lampa.style.pointerEvents = "none"
    }
})