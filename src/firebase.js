//here we add our firebase credential keys for letting our app to communicate with
//our database
import firebase from 'firebase'

// var config = {
  
// };

const firebaseApp = firebase.initializeApp(config)
const db = firebaseApp.firestore()
export {db}