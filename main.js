import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
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
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

document.addEventListener("DOMContentLoaded", () => {
  window.fbAsyncInit = function() {
    FB.init({
      appId: 'YOUR_FACEBOOK_APP_ID',
      cookie: true,
      xfbml: true,
      version: 'v12.0'
    });
    FB.AppEvents.logPageView();
  };

  const googleLogin = document.getElementById("googleLoginBtn");
  const fbLogin = document.getElementById("fbLoginBtn");

  if (googleLogin) {
    googleLogin.addEventListener("click", () => {
      signInWithPopup(auth, googleProvider)
        .then((result) => {
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const user = result.user;
          console.log("User signed in with Google:", user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.error("Error during Google sign-in:", errorCode, errorMessage);
        });
    });
  } else {
    console.error("Google login button not found");
  }

  if (fbLogin) {
    fbLogin.addEventListener("click", () => {
      signInWithPopup(auth, facebookProvider)
        .then((result) => {
          const credential = FacebookAuthProvider.credentialFromResult(result);
          const user = result.user;
          console.log("User signed in with Facebook:", user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.error("Error during Facebook sign-in:", errorCode, errorMessage);
        });
    });
  } else {
    console.error("Facebook login button not found");
  }
});