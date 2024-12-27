function calculatePromise(number1, number2) {
  return new  Promise((resolve, reject) => {
    //memeriksa apakah keduanya 00
    if (number1 === 0 && number2 === 0) {
      reject ("number1 and number2 cannot be 0");
    }

    //melakukan perhitungan
    let result;
    if (number1 % 2 === 0 && number2 % 2 === 0) {
      // number1 dan number2  bil genap maka  dikurangkan
      result = number1-number2;
    } else if (number1 % 2 === 0 && number2 % 2 !== 0) {
      // number1 genap number2 ganjil, maka ditambahkan
      result =number1 + number2;
    } else {
      // number1 dan number 2 ganjil
      result = number1 * number2;
    }

    resolve(result);
  });
}

calculatePromise(2, 3)
  .then(result => console.log(result))
  .catch(error => console.error(error));

calculatePromise(3, 5)
  .then(result => console.log(result))
  .catch(error => console.error(error));

calculatePromise(2, 12)
  .then(result => console.log(result))
  .catch(error => console.error(error));

calculatePromise(8, 4)
  .then(result => console.log(result))
  .catch(error => console.error(error));

calculatePromise(0, 0)
  .then(result => console.log(result))
  .catch(error => console.error(error));





module.exports = calculatePromise;
