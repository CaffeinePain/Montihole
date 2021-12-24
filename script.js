const btn = document.querySelector("#btn");
const spanA = document.querySelector("#spanA");
const spanAC = document.querySelector("#spanAC");
const spanB = document.querySelector("#spanB");
const spanBC = document.querySelector("#spanBC");
const spanC = document.querySelector("#spanC");
const spanCC = document.querySelector("#spanCC");

let counterOfA = 0;
let counterOfAC = 0;
let counterOfB = 0;
let counterOfBC = 0;
let counterOfC = 0;
let counterOfCC = 0;

const tryNum = 1000;

btn.addEventListener('click', startexp);

function startexp() {
    counterOfA = 0;
    counterOfAC = 0;
    counterOfB = 0;
    counterOfBC = 0;
    counterOfC = 0;
    counterOfCC = 0;

    for(i=0;i<tryNum;i++) { //A선택후 바꾸지 않음
        const randnum = Math.random();
        if(randnum <= 0.3) {
            addCounterOfA();
        }
    }
    for(i=0;i<tryNum;i++) {
        const randnum = Math.random();
        if(randnum <= 0.6) {
            addCounterOfAC();
        }
    }
    for(i=0;i<tryNum;i++) { //B선택후 바꾸지 않음
        const randnum = Math.random();
        if(randnum <= 0.3) {
            addcounterOfB();
        }
    }
    for(i=0;i<tryNum;i++) {
        const randnum = Math.random();
        if(randnum <= 0.6) {
            addcounterOfBC();
        }
    }
    for(i=0;i<tryNum;i++) {
        const randnum = Math.random();
        if(randnum <= 0.3) {
            addcounterOfC();
        }
    }
    for(i=0;i<tryNum;i++) {
        const randnum = Math.random();
        if(randnum <= 0.6) {
            addcounterOfCC();
        }
    }
}

/* function startexp() {
    console.log("done");
} */

function addCounterOfA() {
    counterOfA++;
    spanA.innerText = `A선택 후 바꾸지 않음 : ${tryNum}회 시도 중 ${counterOfA}회 성공`;
}
function addCounterOfAC() {
    counterOfAC++;
    spanAC.innerText = `A선택 후 바꿈 : ${tryNum}회 시도 중 ${counterOfAC}회 성공`;
}
function addcounterOfB() {
    counterOfB++;
    spanB.innerText = `B선택 후 바꾸지 않음 : ${tryNum}회 시도 중 ${counterOfB}회 성공`;
}
function addcounterOfBC() {
    counterOfBC++;
    spanBC.innerText = `B선택 후 바꿈 : ${tryNum}회 시도 중 ${counterOfBC}회 성공`;
}
function addcounterOfC() {
    counterOfC++;
    spanC.innerText = `C선택 후 바꾸지 않음 : ${tryNum}회 시도 중 ${counterOfC}회 성공`;
}
function addcounterOfCC() {
    counterOfCC++;
    spanCC.innerText = `C선택 후 바꿈 : ${tryNum}회 시도 중 ${counterOfCC}회 성공`;
}