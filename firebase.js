// firebase.js
 import { initializeApp } from "https://www.gstatic.com/firebasejs/12.12.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.12.1/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAFJLHP7mTYajGMrvMNuT-UESIPhF5JOkw",
    authDomain: "cardapio-site-8111f.firebaseapp.com",
    projectId: "cardapio-site-8111f",
    storageBucket: "cardapio-site-8111f.firebasestorage.app",
    messagingSenderId: "658635439654",
    appId: "1:658635439654:web:818faa2da851531915b0e7",
    measurementId: "G-6L5GB1GCXJ"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);