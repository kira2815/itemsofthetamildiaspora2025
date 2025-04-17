// Scroll behavior
window.addEventListener("scroll", function () {
    if (window.scrollY > 100) {
        document.body.classList.add("scrolled");
    } else {
        document.body.classList.remove("scrolled");
    }
});

// Audio on hover for the radio
document.addEventListener("DOMContentLoaded", function () {
    let sound = document.getElementById("hover-audio");
    let radioElement = document.querySelector(".radio");

    if (radioElement) {
        radioElement.addEventListener("mouseenter", function () {
            sound.currentTime = 0;
            sound.play();
        });

        radioElement.addEventListener("mouseleave", function () {
            sound.pause();
            sound.currentTime = 0;
        });
    }
});

// Resizable indexBox
const indexBox = document.getElementById("indexBox");
const resizeHandle = document.getElementById("dragHandle"); // used for resizing box
let isResizing = false;

resizeHandle?.addEventListener("mousedown", (e) => {
    isResizing = true;
    document.body.style.cursor = "ns-resize";
});

document.addEventListener("mousemove", (e) => {
    if (!isResizing) return;

    const windowHeight = window.innerHeight;
    const newHeight = windowHeight - e.clientY;

    if (newHeight > 80 && newHeight < windowHeight - 100) {
        indexBox.style.height = `${newHeight}px`;
    }
});

document.addEventListener("mouseup", () => {
    isResizing = false;
    document.body.style.cursor = "default";
});

