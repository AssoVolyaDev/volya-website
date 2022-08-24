import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// import { getAuth } from 'firebase/auth';
// import { getAnalytics } from "firebase/analytics";
import { getFunctions } from 'firebase/functions';

// https://firebase.google.com/docs/firestore/query-data/queries#web-version-9_2
// https://travis.media/how-to-use-firebase-with-react/

const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  databaseURL: process.env.databaseURL,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
  measurementId: process.env.REACT_APP_measurementId
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
// const auth = getAuth(app);
const functions = getFunctions(app);
// const analytics = getAnalytics(app);

export { app, /*, auth, */ db, functions };
