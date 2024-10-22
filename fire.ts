import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { getAuth, createUserWithEmailAndPassword} from 'firebase/auth';

const config = {
    apiKey: "AIzaSyAktgZWiT1QEJNA45u_3_CMCubXbV9qKFU",
    authDomain: "flags-99565.firebaseapp.com",
    projectId: "flags-99565",
    storageBucket: "flags-99565.appspot.com",
    messagingSenderId: "443964561152",
    appId: "1:443964561152:web:b7c3adf0bee09a7b9745e5",
    measurementId: "G-2JX079H3X3"
}

const app: any = initializeApp(config);;
const db: any = getFirestore(app);
