import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.12.3/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyD2k2E6NG6BVQfBFuTzX_BrxKK0w40x8ks",
    authDomain: "fir-authentication-9a28c.firebaseapp.com",
    projectId: "fir-authentication-9a28c",
    storageBucket: "fir-authentication-9a28c.appspot.com",
    messagingSenderId: "354306579213",
    appId: "1:354306579213:web:2fd02c3c1d69666b496e44"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
auth.languageCode = "en";
const provider = new GoogleAuthProvider();

const user = auth.currentUser



function updateUserProfile(user) {
  const userName = user.displayName
  const userEmail = user.email
  const userProfilePic = user.photoURL

  document.getElementById('userName').textContent = userName;
  document.getElementById('userEmail').textContent = userEmail;
  document.getElementById("userProfilePic").src = userProfilePic;
}

onAuthStateChanged(auth, (user) => {
  if(user){
    updateUserProfile(user)
    const uid = user.uid
    return uid
  }
  else{
    alert("create account & Login")
  }
})