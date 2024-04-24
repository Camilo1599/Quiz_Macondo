//caso 3 desencriptar numeros binarios a decimales
let str,
  sum = 0,
  convert;
// function convertNumStr(num) {
//   let str = str(num);
//   return str;
// }
const wifiPassword = "01110010_01101001_01110111_01101001";

const listBinary = wifiPassword.split("_");
console.log(listBinary);
console.log(listBinary.length);

for (let i = 0; i < listBinary.length; i++) {
  let binaryNumber = listBinary[i];
  console.log(binaryNumber);

  let exponent = Number(binaryNumber.length);
  str += sum;
  for (let j = 0; j < binaryNumber.length; j++) {
    let n = Number(binaryNumber[j]);
    exponent--;
    convert = n * Math.pow(2, exponent);
    sum += convert;

    console.log(sum);
    // convertNumStr(sum);
  }
  str = sum;
  sum = 0;
  console.log(str);
}
