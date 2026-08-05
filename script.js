const words = [
  "Software Developer",
  "Full Stack Developer",
  "MERN Stack Developer",
  "React Developer"
];

let wordIndex = 0;
let letterIndex = 0;
let deleting = false;

const typing = document.getElementById("typing");

function typeEffect() {

    const current = words[wordIndex];

    if(!deleting){

        typing.textContent = current.substring(0,letterIndex++);

        if(letterIndex > current.length){

            deleting = true;

            setTimeout(typeEffect,1200);

            return;

        }

    }else{

        typing.textContent = current.substring(0,letterIndex--);

        if(letterIndex===0){

            deleting=false;

            wordIndex=(wordIndex+1)%words.length;

        }

    }

    setTimeout(typeEffect,deleting?60:120);

}

typeEffect();


document.addEventListener("keydown", function (e) {
    if (e.ctrlKey && e.key.toLowerCase() === "u") {
        e.preventDefault();
        alert("Viewing source is disabled.");
    }
});

document.addEventListener("keydown", function (e) {

    // F12
    if (e.key === "F12") {
        e.preventDefault();
    }

    // Ctrl+Shift+I / Ctrl+Shift+J / Ctrl+Shift+C
    if (
        e.ctrlKey &&
        e.shiftKey &&
        ["I", "J", "C"].includes(e.key.toUpperCase())
    ) {
        e.preventDefault();
    }

    // Ctrl+U
    if (e.ctrlKey && e.key.toUpperCase() === "U") {
        e.preventDefault();
    }
});


document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
});