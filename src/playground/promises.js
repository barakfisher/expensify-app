const promise = new Promise( (resolve, reject) => {
    setTimeout(() => {
        resolve({
                name:'Andy',
                age:26
                });        
        reject('Somthing went wrong')
        // resolve('this is my 2 resolved data'); // will not appear (breaks after the first resolve)
        // reject('somthing went wrong'); 

    }, 5000);
});

console.log('before');
promise
    .then((data) => {
        console.log('1 ', data);

        return new Promise( (resolve, reject) => {
            setTimeout(() => {
                resolve('My other promise');
            }, 5000);
        });
    }).then( (str) => {
        console.log('2 ', str);
    }).catch((error) => console.log(error));
console.log('after');


//the reject statment will invoke the catch statements
//the resolve statment will invoke the then statements
  