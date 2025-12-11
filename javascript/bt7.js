let nhietdo = parseFloat (prompt("Nhập nhiệt độ")); 
let mua = prompt("Tình trạng mưa? (true/false):")=== "true";
let hoatdong;
if (mua) {
    hoatdong="Ở nhà";
}else{
    if (nhietdo > 25 ){       
    hoatdong="Đi chơi";
    }else if (nhietdo >=15){
       hoatdong= "Đi chơi nhẹ nhàng";
    }else{
        hoatdong="ở nhà";
  
    }
}
      console.log("Hoạt động đề xuất:"+ hoatdong);