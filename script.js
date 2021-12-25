const btn = document.querySelector("#btn");
const NMWin = document.querySelector("#NMWinRate");
const NMLose = document.querySelector("#NMLoseRate");
const CNWin = document.querySelector("#CNWinRate");
const CNLose = document.querySelector("#CNLoseRate");
const NMPercent = document.querySelector("#NMPercent");
const CNPercent = document.querySelector("#CNPercent");

let normal_win_rate = 0;
let normal_lose_rate = 0;
let change_win_rate = 0;
let change_lose_rate = 0;

const tryNum = 1000;

btn.addEventListener('click', startexp);

function startexp() {
    normal_win_rate = 0;
    normal_lose_rate = 0;
    change_win_rate = 0;
    change_lose_rate = 0;

    for (i=0;i<tryNum;i++) {
        const reward = Math.floor(Math.random()*3+1);
        const choice = Math.floor(Math.random()*3+1);

        let val = Math.floor(Math.random()*3+1);
        while(reward == val || choice == val) {
            val = Math.floor(Math.random()*3+1);
        }

        if (reward == choice) normal_win_rate++;
        else normal_lose_rate++;

        let change = Math.floor(Math.random()*3+1);
        while(val == change || choice == change) {
            change = Math.floor(Math.random()*3+1);
        }
        if (reward == change) change_win_rate++;
        else change_lose_rate++;
    }
    NMWin.innerText = `처음의 선택을 바꾸지 않고 당첨 : ${normal_win_rate} 회`;
    NMLose.innerText = `처음의 선택을 바꾸지 않고 꽝 : ${normal_lose_rate} 회`;
    NMPercent.innerText = `선택을 바꾸지 않고 당첨될 확률 : ${Math.floor((normal_win_rate / tryNum)*100)}%`;
    CNWin.innerText = `처음의 선택을 바꿔서 당첨 : ${change_win_rate} 회`;
    CNLose.innerText = `처음의 선택을 바꿔서 꽝 : ${change_lose_rate} 회`;
    CNPercent.innerText = `선택을 바꿔서 당첨될 확률 : ${Math.floor((change_win_rate / tryNum)*100)}%`;
}