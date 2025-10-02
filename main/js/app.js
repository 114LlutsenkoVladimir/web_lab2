import {inputHandler, promptHandler} from "./handler.js";

document.getElementById("inputFormBtn")
    .addEventListener("click", inputHandler)

document.getElementById("promptBtn")
    .addEventListener("click", promptHandler)