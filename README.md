Ngôn ngữ nào cũng vậy, phải nắm những chức năng quan trọng để giải quyết nhanh hơn chư không riêng gì về javascript. Giờ đây qua bài viết này các bạn lại có thể trang bị thêm cho mình những bí kíp tuy nhỏ nhưng võ công lại thượng thừa.
Trong bài viết này tôi sẽ trình bày cho các bạn tìm hiểu sâu hơn về các JavaScript array methods bên cạnh các method cơ bản như push, pop, shift, unshift,splice,….và cách sử dụng chúng như thế nào cho hiệu quả và đơn giản.

Và đây là 10 method array trong javascript được sử dụng phổ biến nhất:

1. forEach()

forEach là một phương thức có sẵn của array được Javascript cung cấp.. Phương pháp này có thể giúp bạn lặp qua các item trên array.

let arr = [1, 2, 3, 4, 5, 6];
  arr.forEach(item => {
    console.log(item); // output: 1 2 3 4 5 6
  });
2. includes()

Method này giúp các bạn check sự tồn tại của item nào trong array, Nó dạng như điểm danh vậy. Khi hô “Luân” có mặt hay không thì dùng method này. Nhanh chóng và tiện lợi.

let arr = ['Tùng', 'Luân', 'Hoà', 'Châu', 'Hoàng', 'Kiều Anh'];
arr.includes('Luân'); // output: true
arr.includes('Nhật'); // output: false
3. filter()
Khi bạn muốn lọc array theo 1 điều kiện cụ thể, filter sẽ giúp bạn làm điều đó.
Method này nhằm tạo 1 array mới với các điều kiện mà các lập trình viên ai ai cũng biết.

let arr = [1, 2, 3, 4, 5, 6];
// thằng nào lớn hơn 2 thì lấy
let filtered = arr.filter(num => num > 2);
console.log(filtered); // output: [3, 4, 5, 6]
4. map()

Nhìn qua , bạn sẽ thằng này có vẻ hao hao giống thằng filter() bên trên? Nhưng không nhé, 2 thằng này hoàn toàn khác nhau.
Hãy nhìn kỹ và xem xét nó. Map() nó tạo ra một array mới bằng việc ta xử lý những item của array cũ bằng phương thức của chúng ta xử lý.

const arr = [1, 2, 3, 4, 5, 6];
// bonus cho mỗi item trong arr thêm 1 đơn vị
const oneAdded = arr.map(num => num + 1);
console.log(oneAdded); // output [2, 3, 4, 5, 6, 7]
console.log(arr); // output: [1, 2, 3, 4, 5, 6]
5. reduce()

Về cơ bản, method này giúp chúng ta có thể tính tổng các phần tử trong array. Còn về nâng cao, nó làm được khá như là:
+ Đếm các instances của các giá trị trong một đối tượng
+ Làm phẳng array.
+ Nhóm đối tượng theo thuộc tính.

Nhiều lắm đây là sơ bộ nói qua cho các bạn nắm thêm chứ mình dùng cũng chưa hết được :), bạn nào muốn tìm hiểu kỹ hơn thì đọc thêm nhé.

Ví dụ về tính tổng:

let arr = [1, 2, 3, 4, 5, 6];
let sum = arr.reduce((total, value) => total + value, 0);
console.log(sum); // 21
6. some()

Method này đơn giản hơn nhiều so với người anh em filter().
Dạng như là kiểm tra xem có ít nhất thằng nào trong array vượt qua được cuộc kiểm tra không. Giống như check xem có thằng nào thi trượt môn không vậy.

const arr = [3, 9, 7, 6];
// thằng nào điểm thi < 5 trượt 
const idiot = arr.some(num => num < 5);
console.log(idiot); // output: true // có thằng trượt :D
7. every()

Thằng method này lại ngược lại với người anh em họ hàng some().
Nó check hết item trong array thoả mãn điều kiện rồi trả về true or false.

const arr = [1, 2, 3, 4, 5, 6];
// check tất cả có > 4 không
const greaterFour = arr.every(num => num > 4);
console.log(greaterFour); // output: false sai rồi
// vậy thì nhỏ hơn 10 
const lessTen = arr.every(num => num < 10);
console.log(lessTen); // output: true đúng luôn
8. sort()

Method này ghi cho vui thôi chứ đã dùng quá nhiều rồi. nghe tên là biết rồi, sắp xếp luôn số và ký tự.

const arr = [1, 2, 3, 4, 5, 6];
const alpha = ['e', 'a', 'c', 'u', 'y'];
// sắp xếp theo thứ tự giảm dần
descOrder = arr.sort((a, b) => a > b ? -1 : 1);
console.log(descOrder); // output: [6, 5, 4, 3, 2, 1]
// sắp xếp theo thứ tự tăng dần
ascOrder = alpha.sort((a, b) => a > b ? 1 : -1);
console.log(ascOrder); // output: ['a', 'c', 'e', 'u', 'y']
9. Array.from()

Cho phép bạn tạo các array từ một kiểu dữ liệu khác,

let name = 'hoangdt';
const nameArray = Array.from(name);
console.log(name); // output: hoangdt
console.log(nameArray); // output: ['h', 'o', 'a', 'n', 'g', 'd', 't'];
Hoặc có thể làm việc với DOM khi không có method nào support về điều này.

// tìm hết element li và đưa nó thành array
let list = document.querySelectorAll('li');
let listArray = Array.from(document.querySelectorAll('li'));
// ok chúng ta cùng check xem nó có là array hay không?
console.log(Array.isArray(list)); // output: false
console.log(Array.isArray(listArray));  // output: true
10. Array.of()

Có thể hiểu nôm na là khi truyền vào phần tử khi tạo array.

const nums = Array.of(1, 2, 3, 4, 5, 6);
console.log(nums); // output: [1, 2, 3, 4, 5, 6]
Hi vọng những method này sẽ giúp ích cho các bạn khi thao tác với array.