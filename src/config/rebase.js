import Rebase from 're-base';
import firebase from 'firebase';
import 'firebase/database';

const app = firebase.initializeApp({
    apiKey: "AIazSyCEu-6oyP1bmods6RHYyr567y5G_QyoRWE",
    authDomain: "fir-todo-3f8ad.firebaseapp.com",
    databaseURL: "https://fir-todo-3f8ad.firebaseio.com",
    projectId: "fir-todo-3f8ad"
});

const db = firebase.database(app);
const base = Rebase.createClass(db);

export default base;