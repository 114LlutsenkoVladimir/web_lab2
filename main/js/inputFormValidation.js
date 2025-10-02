export function validateInputForm() {
    const aValue = document.getElementById("aInput").value.trim();
    const bValue = document.getElementById("bInput").value.trim();
    const tValue = document.getElementById("tInput").value.trim();

    if (aValue === "" || bValue === "" || tValue === "") {
        throw new Error("Все поля должны быть заполнены!");
    }

    if (isNaN(aValue) || isNaN(bValue) || isNaN(tValue)) {
        throw new Error("В поля можно вводить только числа!");
    }
}