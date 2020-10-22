let log = console.log;
log('===== Exercise 1 and 2 =====');

//========= EXERCISE 1 ==========================
const testNum = num => {
    return new Promise((resolve, reject) =>{
        if (num > 10) {
            resolve(`${num} is groter dan 10`);
        } else {
            reject(`${num} is kleiner dan 10`);
        }
    });
};

testNum(7)
.then(result => log(result))
.catch(error => log(error));




//========= EXERCISE 2 ==========================
//==
const arrayOfWords = ['promise', 'practice', 'break'];
const complicatedArray = [1, 'hello', 9];
//==


const makeAllCaps = words => {
    return new Promise((resolve, reject) => {
      if (
        words.every(word => {
          return typeof word === 'string';
        })
      ) {
        resolve(
          sortWords(
            words.map(word => {
              return word.toUpperCase();
            })
          )
        );
      } else {
        reject('Not a string!');
      }
    });
  };
  
  const sortWords = words => {
    return new Promise((resolve, reject) => {
      if (words) {
        resolve(words.sort());
      } else {
        reject('strings only!');
      }
    });
  };
  makeAllCaps(arrayOfWords)
    .then(sortWords(arrayOfWords))
    .then(result => console.log(result))
    .catch(error => console.log(error));
  
  
  makeAllCaps(complicatedArray)
    .then(sortWords(complicatedArray))
    .then(result => console.log(result))
    .catch(error => console.log(error));
  