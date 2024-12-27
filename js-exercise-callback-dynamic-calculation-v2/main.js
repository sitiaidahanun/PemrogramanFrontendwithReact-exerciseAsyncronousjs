function calculate(number1, number2, callback) {
  setTimeout(() => {
    let result;

    if (number1 % 2 === 0 && number2 % 2 === 0) {
      // number1 dan number2 merupakan bilangan genap akan dikurangkan
      result = number1 - number2;
    } else if (number1 % 2 === 0 && number2 % 2 !== 0) {
      // number1 genap dan number2 ganjil maka ditambahkan
      result = number1 + number2;
    } else {
      // number1 ganjil maka dikalikan kedua bilangan
      result = number1 * number2;
    }


    callback(result);
  }, 2000);
}

calculate(2, 3, (result) => {
  console.log(result); 
});

calculate(3, 5, (result) => {
  console.log(result); 
});

calculate(2, 5, (result) => {
  console.log(result);
});

calculate(8, 4, (result) => {
  console.log(result);
});
  
module.exports = calculate;