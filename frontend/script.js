
  // Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-auth.js";

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBlOH9vbKxssHRppN0SJ0jYngVEvYq9z7w",
    authDomain: "taskerrandbeta.firebaseapp.com",
    projectId: "taskerrandbeta",
    storageBucket: "taskerrandbeta.firebasestorage.app",
    messagingSenderId: "213164039137",
    appId: "1:213164039137:web:8a8f6f7d862ba1537d10a0"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  auth.languageCode = 'en'

  onAuthStateChanged(auth, (user) => {
    if (user) {
        window.location.href = "./dashboard.html";
    }
    });

  const provider = new GoogleAuthProvider();

  const googleLogin = document.getElementById("google-login-btn-id");
  googleLogin.addEventListener("click", function(){
    signInWithPopup(auth, provider)
    .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    //const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    console.log(user);
    // IdP data available using getAdditionalUserInfo(result)
    window.location.href = "../frontend/dashboard.html";
    

    }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    //const email = error.customData.email;
    // The AuthCredential type that was used.
    //const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
    }); 
  })