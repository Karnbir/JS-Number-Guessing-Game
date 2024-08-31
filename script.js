let clickCount = 0
let middleText2 = document.getElementsByClassName("middleText");

function function1 () {
    return 1;
}

const function2 = () => 1;




function function3(param1) {
    return 1
}
const function4 = (param1) => {
  return 1;  
}
const function6 = (param1, param2) => {
    return 1;
}
const function5 = param1 => 1;

function Easy() {
    document.querySelectorAll('.middleText > button').forEach(e => e.classList.add('run-FadeOut'));
    setTimeout(() => {
        document.querySelectorAll('.middleText').forEach(e => e.remove());

    }, 1000)}
function getInput(){
    let bottomText = document.getElementById("userNumber");
    const input = document.getElementById("myInput");
    //to replay animation after first hit
    if (clickCount >= 1) {
        bottomText.classList.remove("run-FadeIn");
        void bottomText.offsetWidth;
        bottomText.classList.add("run-FadeIn");
    }

    bottomText.classList.add("run-FadeIn");
    let inputValue = input.value;
    inputValue = inputValue / 3;
    document.getElementById('userNumber').innerHTML = "Your number was " + inputValue;
    clickCount++;
}