import { initializeApp } from "firebase/app";
import { getDatabase, ref, push } from "firebase/database";

const firebaseConfig = {
  apiKey: "YOUR_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  databaseURL: "https://YOUR_PROJECT-default-rtdb.firebaseio.com",
  projectId: "YOUR_PROJECT"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

/* 👇 PUT IT HERE 👇 */
document.getElementById("withdrawBtn").addEventListener("click", () => {
  const amount = document.querySelector("input[placeholder='5000']").value;
  const bank = document.querySelector("input[placeholder='Bank Name']").value;
  const account = document.querySelector("input[placeholder='Account Number']").value;

  push(ref(db, "withdrawals"), {
    amount,
    bank,
    account,
    status: "pending",
    time: Date.now()
  });

  alert("Withdrawal request received 🚀");
});
