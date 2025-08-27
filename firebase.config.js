import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";    
const firebaseConfig = {
  apiKey: "AIzaSyBJYss03t4z9XxDgCwuD2h0ASeA96Qrqg8",
  authDomain: "wmtunes2025.firebaseapp.com",
  projectId: "wmtunes2025",
  storageBucket: "wmtunes2025.firebasestorage.app",
  messagingSenderId: "690123493390",
  appId: "1:690123493390:web:003aee1d13f4e03d2a6c5f"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth }