let a = parseFloat (prompt ("Nhập số thứ 1:"));
let b = parseFloat ( prompt ("Nhập số thứ 2:"));
let toan = prompt ("Nhập toán tử (+,-,*,/):");
let tong; 
switch (toan) {
    case "+":
        tong = a + b;
        break;
    case "-":
        tong = a - b;
        break;
    case "*":
        tong = a * b;
        break;
    case "/":
   if (b === 0){
    console.log("Lỗi: không thể chia cho 0");
   }else{
    tong = a / b;
   }
   break;
   default:
    console.log("Toán tử không hợp lệ");
}
if (tong !== undefined){
    console.log("Kết quả:" + tong);
}