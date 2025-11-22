import { initializeApp, FirebaseApp } from 'firebase/app';
import { getFirestore, Timestamp, Firestore } from 'firebase/firestore';
import { getAuth, Auth } from 'firebase/auth';
import { getStorage, FirebaseStorage } from 'firebase/storage';

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyA-BcctIlLs0Y8PuW2nsyAaNrzqjUzmjpk",
  authDomain: "fpoh-lost-and-found-app.firebaseapp.com",
  projectId: "fpoh-lost-and-found-app",
  storageBucket: "fpoh-lost-and-found-app.firebasestorage.app",
  messagingSenderId: "224518183377",
  appId: "1:224518183377:web:22f72641aad346f9e7e8f0",
  measurementId: "G-W6XGF5CND8"
};

// Initialize Firebase
let app: FirebaseApp | null = null;
try {
  app = initializeApp(firebaseConfig);
} catch (error) {
  console.warn('Firebase initialization error:', error);
  app = null;
}

// Initialize services with error handling
let projectFirestore: Firestore;
let projectAuth: Auth;
let projectStorage: FirebaseStorage;

try {
  if (app) {
    projectFirestore = getFirestore(app);
    projectAuth = getAuth(app);
    projectStorage = getStorage(app);
  } else {
    throw new Error('Firebase app not initialized');
  }
} catch (error) {
  console.warn('Firebase services initialization error:', error);
  // Create minimal mock objects to prevent crashes
  projectFirestore = {} as Firestore;
  projectAuth = {} as Auth;
  projectStorage = {} as FirebaseStorage;
}

const timestamp = Timestamp;

export { projectFirestore, projectAuth, projectStorage, timestamp };

