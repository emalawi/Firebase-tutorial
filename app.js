import { auth } from "./firebase.js";

import {
    createUserWithEmailAndPassword,
    sendEmailVerification
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";

const registerBtn = document.getElementById("registerBtn");

const email = document.getElementById("email");

const password = document.getElementById("password");

const message = document.getElementById("message");

registerBtn.addEventListener("click", async () => {

    message.textContent = "";

    try {

        const userCredential =
            await createUserWithEmailAndPassword(
                auth,
                email.value,
                password.value
            );

        await sendEmailVerification(
            userCredential.user
        );

        message.style.color = "green";

        message.innerHTML =
            "Registration successful!<br><br>" +
            "A verification email has been sent to:<br><b>" +
            userCredential.user.email +
            "</b><br><br>" +
            "Please open your email and click the verification link before logging in.";

    } catch (error) {

        message.style.color = "red";

        message.textContent = error.message;

    }

});
