import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyASEVsRO-h_YtbBDpb1l2uycuJSGnL0ThQ",
  authDomain: "mo-cloud-e1e64.firebaseapp.com",
  projectId: "mo-cloud-e1e64",
  storageBucket: "mo-cloud-e1e64.firebasestorage.app",
  messagingSenderId: "794955756470",
  appId: "1:794955756470:web:916d768b178457eb468717"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;