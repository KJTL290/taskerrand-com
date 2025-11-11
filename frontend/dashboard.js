import { initializeApp } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-auth.js";

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

// Check user state
onAuthStateChanged(auth, (user) => {
    if (!user) {
        // Not logged in → redirect back to login
        window.location.href = "./index.html";
        return;
    }

    // Logged in → show user info
    document.getElementById("user-info").textContent =
        `Signed in as: ${user.email}`;
});

// Logout button event
document.getElementById("google-logout-btn-id").addEventListener("click", () => {
    signOut(auth).then(() => {
        window.location.href = "../frontend/index.html";
    });
});
