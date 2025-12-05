let tuoinguoidung = prompt ("Tuổi người dùng");
if (tuoinguoidung <0){
    console.log("Tuổi không hợp lệ");
}
    if (tuoinguoidung <18) {
        console.log("Trẻ em");
    } else if (tuoinguoidung >=18 && tuoinguoidung <=30 ){
        console.log("Thanh niên");
    }else if (tuoinguoidung >=31 && tuoinguoidung <=50 ){ 
        console.log("Trung niên");
    }else if (tuoinguoidung >50) {
        console.log("Cao niên");
    }
