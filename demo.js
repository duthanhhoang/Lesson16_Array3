let arr = [1,3,9,2,7,6,12];
// let newArr = [];
// for (let i = 0; i < arr.length; i++) {
//     if(arr[i] > 3){
//         newArr.push(arr[i]);
//     }
// }
// console.log(newArr);

// let newArr = arr.filter(a => a > 3)
// let newArr = arr.map(a => a * a)
let newArr = arr.sort(function (a,b) {
    return b-a;
}); //a-z

console.log(newArr);

// Tìm số lớn nhất, cho 1 mảng số nguyên
// Đưa ra phần tử lớn nhất mảng

// Cho 1 mảng số nguyên
// Nhập vào 1 số, nếu số đó có trong mảng, thì xoá số đó khỏi mảng
// let arr1 = [1,3,9,2,3];

// a = 3 => [1,9,2]