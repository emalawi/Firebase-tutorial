import { auth } from "./firebase.js";
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";

const registerBtn = document.getElementById("registerBtn");
const email = document.getElementById("email");
const password = document.getElementById("password");
const message = document.getElementById("message");

registerBtn.addEventListener("click", async () => {
    try {
        const userCredential = await createUserWithEmailAndPassword(
            auth,
            email.value,
            password.value
        );

        message.style.color = "green";
        message.textContent = "Registration successful!";

        console.log(userCredential.user);

    } catch (error) {
        message.style.color = "red";
        message.textContent = error.message;
    }
});
