// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {
  getStorage,
  ref,
  listAll,
  getDownloadURL,
  uploadBytes
} from "firebase/storage";

// ✅ Correct Firebase Config (with fixed storageBucket)
const firebaseConfig = {
  apiKey: "AIzaSyCOazS8lRzqXujRnnMk5hypF6dji4QxJ-g",
  authDomain: "codeqube-3bf04.firebaseapp.com",
  projectId: "codeqube-3bf04",
  storageBucket: "codeqube-3bf04.appspot.com", // ✅ fixed
  messagingSenderId: "1049939926485",
  appId: "1:1049939926485:web:376a2455e59b5a0de5b15c",
  measurementId: "G-8DT1VYM2X3"
};

// ✅ Initialize Firebase App
const app = initializeApp(firebaseConfig);

// ✅ Initialize Services *after* app is created
const auth = getAuth(app);
const storage = getStorage(app);

// ✅ Export only after initialization
export {
  app,
  auth,
  storage,
  ref,
  listAll,
  getDownloadURL,
  uploadBytes
};
