// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDPeQDbD0ln1nETXksCrgsCfqYUWX71CMA",
  authDomain: "my-ekattor-web.firebaseapp.com",
  projectId: "my-ekattor-web",
  storageBucket: "my-ekattor-web.firebasestorage.app",
  messagingSenderId: "59640616641",
  appId: "1:59640616641:web:de684da51adff155002640"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;