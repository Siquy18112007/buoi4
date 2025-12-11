let giatri = parseFloat(prompt("Nhập giá trị:"));
let donvi =prompt("Đơn vị (celsius/fahrenheit)").toLowerCase();
if (giatri < -273){
    console.log("Giá trị không hợp lệ: nhiệt độ không thể dưới -273 độ");
}else {
    let ketqua;
    switch (donvi) {
        case "celsius":
            ketqua = (giatri * 9 / 5) + 32;
             console.log(giatri + " Celsius = " + ketqua + " Fahrenheit");
            break;
        case "fahrenheit":
            ketqua = (giatri - 32) * 5 / 9;
              console.log(giatri + " Fahrenheit = " + ketqua + " Celsius");
            break;
        default:
            console.log("Đơn vị không hợp lệ: celsius hoặc fahrenheit");
    }
}