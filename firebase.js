import { initializeApp } from "firebase/app";
import { getDatabase, ref, push } from "firebase/database";

const firebaseConfig = {
  apiKey: "...",
  authDomain: "skyybund.firebaseapp.com",
  projectId: "skyybund",
  databaseURL: "https://skyybund-default-rtdb.firebaseio.com", // IMPORTANT
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// button click
document.getElementById("withdrawBtn").addEventListener("click", function () {
  push(ref(db, "withdrawals"), {
    name: "User",
    amount: 5000,
    bank: "GTBank",
    account: "1234567890",
    time: Date.now()
  });

  alert("Withdrawal request sent!");
});
