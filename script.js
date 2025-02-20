const inputdisp = document.getElementById("input")
const erase = document.getElementById("icon")
console.log(inputdisp)
function appendtodisplay(input){
    console.log(input)
    inputdisp.value += input;
};

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