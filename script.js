const btn = document.querySelector("#btn");
const spanA = document.querySelector("#spanA");
const spanB = document.querySelector("#spanB");
const spanC = document.querySelector("#spanC");

let counterOfA = 0;
let counterOfB = 0;
let counterOfC = 0;

btn.addEventListener('click', startexp);

function startexp() {
    for(i=0;i<1000;i++) {
        counterOfA++;

    }
}

function addCounterOfA() {
    counterOfA++;
    spanA.innerText = `A를 선택한 횟수 : ${counterOfA}`;
}
function addcounterOfB() {
    counterOfB++;
    spanB.innerText = `B를 선택한 횟수 : ${counterOfB}`;
}
function addcounterOfC() {
    counterOfC++;
    spanC.innerText = `C를 선택한 횟수 : ${counterOfC}`;
}