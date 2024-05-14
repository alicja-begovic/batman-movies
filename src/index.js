import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
//import { initializeApp } from "firebase/app";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();

// const firebaseConfig = {
//   apiKey: "AIzaSyDg690NXmhqpO3AnXhuR_cyPBaFa1GdWjs",
//   authDomain: "test-de3f5.firebaseapp.com",
//   projectId: "test-de3f5",
//   storageBucket: "test-de3f5.appspot.com",
//   messagingSenderId: "526001346743",
//   appId: "1:526001346743:web:7b9719bd470e7d2b5bd532",
// };

// //init firebase app
// initializeApp(firebaseConfig);
