export function task2(size) {
    let n = 16;
    const arr = [];


    if (!Number.isInteger(size) || size <= 0 || size > 50) {
        throw new Error("size має бути цілим числом від 1 до 50");
    }

    for (let i = 0; i < size; i++) {
        arr[i] = n - 64;
        n = (n * 67 + 11) % 128;
    }
    console.log("Сгенерированный массив:", arr);

    let positiveCount = 0;
    let positiveProduct = 1;
    for (let i = 0; i < size; i++) {
        if(arr[i] > 0) {
            positiveCount++;
            positiveProduct *= arr[i];
        }
    }
    if (positiveCount === 0) {
        console.log("немає додатніх елементів");
    } else {
        console.log("result: " +  Math.pow(positiveProduct, 1 / positiveCount));
    }

}