import { initializeApp } from 'firebase/app';
import {EmailAuthProvider, getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged} from 'firebase/auth';

const config = {
    apiKey: "AIzaSyAktgZWiT1QEJNA45u_3_CMCubXbV9qKFU",
    authDomain: "flags-99565.firebaseapp.com",
    databaseURL: "https://flags-99565-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "flags-99565",
    storageBucket: "flags-99565.appspot.com",
    messagingSenderId: "443964561152",
    appId: "1:443964561152:web:b7c3adf0bee09a7b9745e5",
    measurementId: "G-2JX079H3X3"
}

const app = initializeApp(config)

const auth = getAuth(app)
auth.useDeviceLanguage();

const check = () => {
    onAuthStateChanged(auth, (user) => {
        if(user){
            const id = user.uid
            console.log(id)
        }else{
            alert("wrong user login")
        }
    })
}

document.getElementById("Login").addEventListener("submit", (e) => {
    e.preventDefault()
    signInWithEmailAndPassword(auth, document.getElementById("email1").value, document.getElementById("password1").value).then((value) => {
        const usercreds = value.user
        console.log(usercreds)
        check()
    }).catch((err) => {
        alert("wrong user login")
    })
})
document.getElementById("Register").addEventListener("submit", (e) => {
    e.preventDefault()
    createUserWithEmailAndPassword(auth, document.getElementById("email2").value, document.getElementById("password2").value).then((value) => {
        const usercreds = value.user
        console.log(usercreds)
    }).catch((err) => {
        console.error(err)
    })
})
