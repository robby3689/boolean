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

// ✅ Firebase config (your actual project details)
const firebaseConfig = {
  apiKey: "AIzaSyCOazS8lRzqXujRnnMk5hypF6dji4QxJ-g",
  authDomain: "codeqube-3bf04.firebaseapp.com",
  projectId: "codeqube-3bf04",
  storageBucket: "codeqube-3bf04.appspot.com", // ✅ Must end with .appspot.com
  messagingSenderId: "1049939926485",
  appId: "1:1049939926485:web:02ef8bb0ffd39f79e5b15c",
  measurementId: "G-4WZ75G5L1L"
};

// ✅ Initialize Firebase app and services
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const storage = getStorage(app);

// ✅ Export only needed SDK functions
export { app, auth, storage, ref, listAll, getDownloadURL, uploadBytes };
