// Sửa đoạn code sau để hoạt động đúng
// for (let i = 0; i < 3; i++) {
//   setTimeout(function () {
//     console.log(i); // Hiện tại in ra 3,3,3
//   }, 100);
// }
// Yêu cầu: Sửa để in ra 0,1,2


// Tạo một object student với const
// Thêm thuộc tính điểm và in ra
// const student = {
//   name: "ThuyTien",
//   age: 20,
// };

// student.grade = "Anh văn";
// student.age = 21;


// console.log(student);



// Thực hiện các thao tác sau:
// 1. Thêm thuộc tính grade với giá trị "A"
// 2. Thay đổi tuổi thành 21
// 3. In ra toàn bộ thông tin student




// const name = "tu"
// const age = 22
// const mesage =
//  `Xin chào, ${name}
// ${age} tuổi.`;
// console.log(mesage);



// Tạo template cho email thông báo
// const user = {
//   firstName: "Nguyen",
//   lastName: "Van A",
//   product: "Laptop Dell XPS",
//   price: 25000000,
//   orderDate: "2024-01-15",
// };

// // Tạo template string cho email
// const emailTemplate = `xin chao user,${user.firstName} ${user.lastName},
// Cảm ơn bạn đã mua sản phẩm ${user.product} với giá ${user.price.toLocaleString('vi-VN')}₫ vào ngày ${user.orderDate}.`; // Viết template ở đây

// console.log(emailTemplate);


// Tạo HTML template cho card sản phẩm
const product = {
  name: "iPhone 15",
  price: 20000000,
  discount: 10,
  inStock: true,
};

// Tính giá sau giảm
const finalPrice = product.price * (1 - product.discount / 100);

// Tạo template HTML
const productCard = `
    h2>${product.name}</h2>
    p>Giá gốc: ${product.price.toLocaleString('vi-VN')}₫</p>
    p>Giá sau giảm: ${finalPrice.toLocaleString('vi-VN')}₫</p>
    p>${product.inStock ? "Còn hàng" : "Hết hàng"}</p>
`; // Viết template ở đây

console.log(productCard);