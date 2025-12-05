let nhapnam = prompt("nhập năm");

if (nhapnam % 400 == 0 || (nhapnam % 4 === 0 && nhapnam % 100 !== 0)) {
  console.log("Năm nhuận");
} else {
  console.log("Năm không nhuận");
}   
