import { auth,db} from "./config.js";
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";

const email = document.getElementById("email");
const password = document.getElementById("password");
const register = document.getElementById("register")



const handleRegister = (e) => {
        e.preventDefault()
        createUserWithEmailAndPassword(auth, email.value, password.value)
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

register.addEventListener("submit", handleRegister);