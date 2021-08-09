const firebase = require('firebase');
require('firebase/firestore');

const {
  reservations,
  restaurants,
  dateAvailabilities,
  reviews,
} = require('./testData');
var firebaseConfig = {
  apiKey: 'AIzaSyAv_tCb9b4AW2WB3v9H0tVPlPGhcNLpQkk',
  authDomain: 'restaurant-app-demo-77bba.firebaseapp.com',
  projectId: 'restaurant-app-demo-77bba',
  storageBucket: 'restaurant-app-demo-77bba.appspot.com',
  messagingSenderId: '273295484065',
  appId: '1:273295484065:web:7733a0d42b51ade9423ce0',
  measurementId: 'G-F10JHLGL1B',
};

firebase.initializeApp(firebaseConfig);

// get a test up to firestore
const db = firebase.firestore();

function populateCollection(collectionName, items) {
  return Promise.all(
    items.map((item) => {
      const { id, ...data } = item;
      return db.collection(collectionName).doc(id).set(data);
    })
  );
}

Promise.all([
  populateCollection('reservations', reservations),
  populateCollection('reviews', reviews),
  populateCollection('restaurants', restaurants),
  populateCollection('dateAvailabilities', dateAvailabilities),
])
  .then(() => {
    console.log('Done');
    process.exit(0);
  })
  .catch((err) => {
    console.log(err.message);
  });
