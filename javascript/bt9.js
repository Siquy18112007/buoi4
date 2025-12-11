let tuoi = parseFloat(prompt("Nhập tuổi"));
let vaitro = parseFloat(prompt("Nhập vai trò (admin/user/quest:"));
if (vaitro === "admin"){
    console.log("Được truy cập");
}else if (vaitro === "user" && tuoi<=18){
    console.log("Được truy cập");
}else {
    console.log("Không được truy cập");
}