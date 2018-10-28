// // New ES6 syntax - destucturing

 //  Object Destructuring

// const person= {
//     name:'Archi',
//     age:12,
//     location: {
//         city:'asd1231',
//         temp:92
//     }
// }
// // const name =person.name;
// // const age =person.age;

// const { name: firstName = 'Anonymous', age } = person;
// const { temp: temprature, city } = person.location;

// console.log (`${firstName} is ${age} YO`)

// console.log (`Its ${temprature} in ${city} YO`)

// const book ={
//     title : 'Ego is the enemy',
//     author: 'Rayen Hollidfay',
//     publisher: {
//         name: 'penguin'
//     }
// }

// const {name: publisherName = 'self-published'} = book.publisher

// console.log(`${publisherName}`);




//  Array Destructuring

const address = ['1299 S jupiter Street', 'philadelphia', , '194147'];

const [street, , state = 'New York', zip] = address;
console.log(`you are in ${street} ${state}`);

const item = ['coffee (hot)','$2.00','$2.50','$2.75'];
const [itmeName, ,mediumPrice] = item 
console.log(`a meduim ${itmeName} costs ${mediumPrice}`);