import { initializeApp } from "firebase/app";
import { initializeAppCheck, ReCaptchaV3Provider } from "firebase/app-check";
import { getAnalytics } from "firebase/analytics";
import { getPerformance } from "firebase/performance";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getFunctions } from "firebase/functions";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: ""
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const appCheck = initializeAppCheck(app, {provider: new ReCaptchaV3Provider('PROJECT_PUBLIC_TOKE'),isTokenAutoRefreshEnabled: true});
const auth = getAuth(app);
const analytics = getAnalytics(app);
const perf = getPerformance(app);
const storage = getStorage(app);
const functions = getFunctions(app);
const firestore = getFirestore(app);
const database = getDatabase(app);

export { app as firebase,
  appCheck,
  auth,
  analytics,
  perf,
  storage,
  functions,
  firestore,
  database };