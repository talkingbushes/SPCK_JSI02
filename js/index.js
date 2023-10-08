import { onAuthStateChanged} from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";
import { auth } from "./config.js";
import { signOut } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js"

const display = document.getElementById("display-email")
const logout = document.getElementById("logout")
const login = document.getElementById("login")

onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      console.log(user.email);
      display.textContent = ` ${user.email}`;
      logout.style.display = "unset"
      login.style.display = "none"
    } else {
      window.location = './login.html';
    }
  });

const handleLogout = () => {
  signOut(auth).then(() => {
    window.location = './login.html'
  }).catch((error) => {
    // An error happened.
  });
}

logout.addEventListener('click',handleLogout)