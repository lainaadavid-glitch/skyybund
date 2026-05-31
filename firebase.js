<script type="module">
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "...",
  authDomain: "skyybund.firebaseapp.com",
  projectId: "skyybund",
  storageBucket: "skyybund.appspot.com",
  messagingSenderId: "789154861574",
  appId: "1:789154861574:web:2dcfee93e36895a605a987"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
</script>
