import { getAuth } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js";

  const firebaseConfig = {
    apiKey: "AIzaSyD1jlNDmxsJmbFRBTou15D_HNHjKbTPuCM",
    authDomain: "spck-312ce.firebaseapp.com",
    projectId: "spck-312ce",
    storageBucket: "spck-312ce.appspot.com",
    messagingSenderId: "154812053946",
    appId: "1:154812053946:web:b06bbdb5549e62755c8583"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app);
  export const auth = getAuth(app)