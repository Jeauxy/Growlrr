import firebase from 'firebase';


const config = {
    apiKey: "AIzaSyCvldY8SQJDbKURgiBZqIVOeGm0XFb3e8g",
    authDomain: "ga-todo-list-46567.firebaseapp.com",
    databaseURL: "https://ga-todo-list-46567.firebaseio.com",
    storageBucket: "ga-todo-list-46567.appspot.com",
    messagingSenderId: "769545845017"
  };

firebase.initializeApp(config);

export default firebase;
