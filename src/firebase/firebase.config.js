import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyDXwQ65gOdOcuBZfiBEsnv_wSn7k0WVLtU",
    authDomain: "euphoria-safoun.firebaseapp.com",
    projectId: "euphoria-safoun",
    storageBucket: "euphoria-safoun.appspot.com",
    messagingSenderId: "463559089928",
    appId: "1:463559089928:web:b80c13f431fdd684ed96bd"
};

const app = initializeApp(firebaseConfig);

export default app;