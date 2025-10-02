import {inputHandler, promptHandler, task2Handler} from "./handler.js";

document.getElementById("inputFormBtn")
    .addEventListener("click", inputHandler)

document.getElementById("promptBtn")
    .addEventListener("click", promptHandler)

document.getElementById("task2FormBtn")
    .addEventListener("click", task2Handler)