import {validateInputForm} from "./inputFormValidation.js";
import {calcY, calcS} from "./mathFunction.js";
import {task2} from "./task2/task2.js";

export function inputHandler() {
    try {
        validateInputForm();

        const a = Number(document.getElementById("aInput").value);
        const b = Number(document.getElementById("bInput").value);
        const t = Number(document.getElementById("tInput").value);

        const y = calcY(a, b, t);
        const s = calcS(a, b, t);

        document.getElementById("inputResult").innerHTML = `
        y = ${y}<br>
        s = ${s}
    `;
    } catch (err) {
        document.getElementById("inputResult").style.color = "red";
        document.getElementById("inputResult").innerText = `${err.message}`;
    }
}

export function promptHandler() {
    try {
        const a = Number(prompt("Введите a:"));
        const b = Number(prompt("Введите b:"));
        const t = Number(prompt("Введите t:"));

        const y = calcY(a, b, t);
        const s = calcS(a, b, t);

        document.getElementById("promptResult").innerHTML = `
        y = ${y}<br>
        s = ${s}
    `;
    } catch (err) {
        document.getElementById("promptResult").style.color = "red";
        document.getElementById("promptResult").innerText = `${err.message}`;
    }
}

export function task2Handler() {
    const size = Number(document.getElementById("sizeInput").value);
    task2(size);
}