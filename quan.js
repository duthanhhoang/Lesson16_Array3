function removeFromArray(array, number) {
    // let writeIndex = 0;
    let newArr = [];

    for (let i = 0; i < array.length; i++) {
        if (array[i] != number) {
            // array[writeIndex] = array[i];
            // writeIndex++;
            newArr.push(array[i])
        }
    }
    // array.length = writeIndex;
    return newArr;
}


const array = [1, 2, 3, 2, 4, 2, 5];
const number = 2;
removeFromArray(array, number);
console.log(array);
