async function calculate(number1, number2) {
  return new Promise((resolve, reject) => {
    // number1 dan number2 adalah nol, maka Promise akan direject
    if (number1 === 0 && number2 === 0) {
      reject("number1 and number2 cannot be 0");
    }

    // number1 dan number2 merupakan bilangan genap, kurangkan kedua bilangan
    if (number1 % 2 === 0 && number2 % 2 === 0) {
      resolve(number1 - number2);
    }

    // number1 genap dan number2 ganjil, tambahkan kedua bilangan
    else if (number1 % 2 === 0 && number2 % 2 !== 0) {
      resolve(number1 + number2);
    }

    // number1 dan number2 ganjil, kalikan kedua bilangan
    else {
      resolve(number1 * number2);
    }
  });
}

calculate(2, 3)
  .then(result => console.log(result))  
  .catch(error => console.error(error));

calculate(3, 5)
  .then(result => console.log(result))  
  .catch(error => console.error(error));

calculate(2, 12)
  .then(result => console.log(result))  
  .catch(error => console.error(error));

calculate(8, 4)
  .then(result => console.log(result)) 
  .catch(error => console.error(error));

calculate(0, 0)
  .then(result => console.log(result))
  .catch(error => console.error(error));

module.exports = calculate;
