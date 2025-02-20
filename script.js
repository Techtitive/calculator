const inputdisp = document.getElementById("input")
const erase = document.getElementById("icon")
console.log(inputdisp)
function appendtodisplay(input){
    console.log(input)
    inputdisp.value += input;
};

document.addEventListener("keydown", (event) => {
    const allowedKeys = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "+", "-", "*", "/", "."];

    if (allowedKeys.includes(event.key)) {
        appendtodisplay(event.key);
    }
    else if (event.key === "Enter"){
        equal()
    }
});


function equal(){
    const answer = parseFloat(eval(inputdisp.value).toFixed(2));
    console.log(answer)
    inputdisp.value = answer;
    inputdisp.style.boxShadow = "0px 0px 10px yellow, 0px 0px 13px yellow";

    setTimeout(() => {
        inputdisp.style.boxShadow = "none";
    }, 5000);
};

erase.addEventListener("click", () => {
    inputdisp.value = inputdisp.value.slice(0, -1);
    inputdisp.style.boxShadow = "0px 0px 5px yellow, 0px 0px 12px yellow";

    setTimeout(() => {
        inputdisp.style.boxShadow = "none";
    }, 3000);
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Backspace"){
        inputdisp.value = inputdisp.value.slice(0, -1);
        inputdisp.style.boxShadow = "0px 0px 5px yellow, 0px 0px 12px yellow"; 

        setTimeout(() => {
            inputdisp.style.boxShadow = "none";
        }, 3000);
    }


});

let eraseHoldTimeout;
let keyPressStart = {};

erase.addEventListener("mousedown", () => {
    eraseHoldTimeout = setTimeout(() => {
        inputdisp.value = "";
    }, 1000);
});

erase.addEventListener("mouseup", () => clearTimeout(eraseHoldTimeout));
erase.addEventListener("mouseleave", () => clearTimeout(eraseHoldTimeout));

document.addEventListener("keydown", (event) => {
    if (event.key === "Backspace" && !keyPressStart[event.key]) {
        keyPressStart[event.key] = Date.now();

        eraseHoldTimeout = setTimeout(() => {
            inputdisp.value = "";
        }, 1000);
    }
});

document.addEventListener("keyup", (event) => {
    if (event.key === "Backspace") {
        clearTimeout(eraseHoldTimeout);
        delete keyPressStart[event.key];
    }
});
