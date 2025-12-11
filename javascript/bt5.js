let diemso = parseInt(prompt("Nhập điểm (0-100):"));
switch (true){
    case (diemso>= 90 && diemso <=100):
        console.log("Giỏi");
        break;
    case (diemso>=70 && diemso <= 89 ):
        console.log("Khá");
        break;
    case (diemso>=50 && diemso <= 69 ):
        console.log("Trung bình");
        break;
    case (diemso>=0 && diemso < 50 ):
        console.log("Yếu");
        break;
    default:
        console.log("Điểm không hợp lệ");
}
