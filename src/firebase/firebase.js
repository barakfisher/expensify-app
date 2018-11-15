import * as firebase from 'firebase';

// the configuration object from firebase website:
const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
  };

  firebase.initializeApp(config);

const database = firebase.database();


export {firebase, database as default};

 





//move to playGround


//child remove event
// database.ref('expenses').on('child_removed', (snapshot) =>{
//     console.log(snapshot.key, snapshot.val());
// })

// // child changed event 
// database.ref('expenses').on('child_changed', (snapshot)=>{
//     console.log(snapshot.key, snapshot.val());
// })

// //child added event
// database.ref('expenses').on('child_added', (snapshot) =>{
//     console.log(snapshot.key, snapshot.val());
// })

// // database.ref('expenses')
// //   .on('value', (snapshot) =>{
// //       const expenses =[];
// //       snapshot.forEach((childSnapshot) =>{
// //         expenses.push({
// //             id: childSnapshot.key,
// //             ...childSnapshot.val()
// //         });
// //       });
// //       console.log(expenses)
// //   });


// // database.ref('expenses')
// //   .once('value')
// //   .then((snapshot) =>{
// //     const expenses = [];
// //     snapshot.forEach((childSnapshot) => {
// //         expenses.push({
// //                 id: childSnapshot.key,
// //                 ...childSnapshot.val()
// //         });
// //     });
// //     console.log(expenses);
// //   });

// // database.ref('expenses').push({
// //     description: expenses[2].description,
// //     note: expenses[2].note,
// //     amount: expenses[2].amount,
// //     createdAt: expenses[2].createdAt
// // });







// // database.ref('notes').set(notes);



// // database.ref().on('value', (snapshot) => {
// //     const val = snapshot.val();
// //     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// // }, (error) => {
// //     console.log('error ', e)
// // });

// // database.ref()
// //     .once('value') 
// //     .then((snapshot) => {
// //         const val = snapshot.val();
// //         console.log(val);
// //     })
// //     .catch((e) => {
// //         console.log('fatching data failed ' ,e)
// //     });

// // const onValueChange = database.ref()
// //     .on('value', (snapshot) => {
// //         const val = snapshot.val();
// //         console.log(val);
// //     }, (e) =>{
// //         console.log('error with data fetching',e);
// //     });
    
// // setTimeout(() => {
// //     database.ref('age').set(29);
// // }, 3500);

// // setTimeout(() => {
// //     database.ref().off(onValueChange)
// // }, 3500);

// // setTimeout(() => {
// //     database.ref('age').set(30);
// // }, 3500);
    
//   //ref - refference to the root of our db (by default) unless parameters are passed
//   //set will override the current db if you want to change a pice of data set a ref 
//   //addig data to our database
 





// //   database.ref().set({
// //     name:'Barak',
// //     age: 26,
// //     stressLevel: 6,
// //     job:{
// //         title:'software dev',
// //         company:'google'
// //     },
// //     location:{
// //         city:'Philadelphia',
// //         county: 'United States'
// //     }
// //   }).then( () => {
// //         console.log('Data is saved')
// //     }).catch( (e) => {
// //         console.log('This failed',e)
// //     });


// //     database.ref().update({
// //         stressLevel:9,
// //         'job/company': 'Amazon',
// //         'location/city':'Seattle'     
// //     }).then( () => {
// //         console.log('Data is saved')
// //     }).catch( (e) => {
// //         console.log('This failed',e)
// //     });

// //   database.ref().set('this is my data');
// //   database.ref('age').set(28);
// //   database.ref('location/city').set('t12');

// // database.ref().remove()
// //     .then(() => {
// //         console.log('deleted successfully')
// //     }).catch(() => {
// //         console.log('delete fail')
// //     });
