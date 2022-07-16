import {getApp, getApps, initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyA_slW6nRcIWD0X1wlvV46_c5CFYq-JTow',
  authDomain: 'fooddeliveryapp-b7798.firebaseapp.com',
  databaseURL: 'https://fooddeliveryapp-b7798-default-rtdb.firebaseio.com',
  projectId: 'fooddeliveryapp-b7798',
  storageBucket: 'fooddeliveryapp-b7798.appspot.com',
  messagingSenderId: '673527675010',
  appId: '1:673527675010:web:d40cdcc6c6cbb6cbeb9c9b',
};

const app = getApps.length>0 ? getApp() : initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const storage = getStorage(app);

export {app, firestore, storage};
