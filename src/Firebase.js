import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCk546itKt_3k8MprqW5SlYNSRA_gZ0qZc',
  authDomain: 'message-app-77f91.firebaseapp.com',
  projectId: 'message-app-77f91',
  storageBucket: 'message-app-77f91.appspot.com',
  messagingSenderId: '388301541267',
  appId: '1:388301541267:web:9860f31b8b8bfe7c69a266',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
