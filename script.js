let clickCount = 0
let bottomText = document.getElementById("userNumber");
const input = document.getElementById("myInput");

function getInput(){
    //to replay animation after first hit
    if (clickCount >= 1) {
        bottomText.classList.remove("run-animation");
        void bottomText.offsetWidth;
        bottomText.classList.add("run-animation");
    }
    
    bottomText.classList.add("run-animation");
    let inputValue = input.value;
    inputValue = inputValue / 3;
    document.getElementById('userNumber').innerHTML = "Your number was " + inputValue;
    clickCount++;
}