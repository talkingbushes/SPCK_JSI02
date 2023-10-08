import { auth,db} from "./config.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";

const email = document.getElementById("email");
const password = document.getElementById("password");

const loginform = document.getElementById("loginform")

const handleLogin = (e) => {
    e.preventDefault()
    signInWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
        const user = userCredential.user;
        console.log(user.email);
        window.location="index.html"
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorCode)
    });
};

loginform.addEventListener("submit", handleLogin);