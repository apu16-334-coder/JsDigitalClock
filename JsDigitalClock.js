
function Jsclock() {
    const time = new Date()
    let hour = time.getHours() % 12
    let min = time.getMinutes();
    let second = time.getSeconds();
    if (hour === 0) hour = 12;

    return `${hour} : ${(min > 9) ? min : "0" + min} : ${(second > 9) ? second : "0" + second} ${time.getHours()>=12? "PM" : "AM"}`
}


const time=document.querySelector(".time");
time.textContent=Jsclock()