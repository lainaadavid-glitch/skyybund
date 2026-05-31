import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyCealI_1It7_F_epQdSNEkfWUgLAK-ACX0",
  authDomain: "skyybund.firebaseapp.com",
  projectId: "skyybund",
  storageBucket: "skyybund.firebasestorage.app",
  messagingSenderId: "789154861574",
  appId: "1:789154861574:web:2dcfee93e36895a605a987",
  measurementId: "G-1XY1Q33L74"
};

const app = initializeApp(firebaseConfig);

// Safe analytics (won’t break site)
let analytics;
if (typeof window !== "undefined") {
  analytics = getAnalytics(app);
}

export default app;
