import { initializeApp } from "firebase/app"; // YE TO MUST H
import { getDatabase } from "firebase/database"; // YHN CALL KRNA BEST PRACTICE, OTHERWISE HAR COMPONENET M BHI GET KR SAKTY HN, LEKIN PHIR HAR COMPNENT M TOP PR FIREBASE KO INITIALIZ BHI KRNA PARAY GA.

// Haan, magar agar tum Firebase ko multiple components me use kar rahe ho, to baar baar initializeApp() call karna sahi practice nahi hai.

// 👉 Best Approach: Ek firebaseConfig.js file me initializeApp() aur getDatabase() ko ek baar define karo aur phir jahan chahiye wahan import kar lo.

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID, 
  databaseURL : import.meta.env.VITE_DATABASE_URL
};

// console.log(import.meta.env.VITE_DATABASE_URL);
// console.log("Database URL:", import.meta.env.VITE_DATABASE_URL);

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export default app
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);

export default app;

