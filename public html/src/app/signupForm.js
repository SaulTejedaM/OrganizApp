import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"
import { auth } from "./firebase.js";
import { showMessage } from "./showMessage.js";

const signUpForm = document.querySelector("#signup-form");

signUpForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = signUpForm["signup-email"].value;
  const password = signUpForm["signup-password"].value;

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password)
    console.log(userCredential)

    // Close the signup modal
    const signupModal = document.querySelector('#signupModal');
    const modal = bootstrap.Modal.getInstance(signupModal);
    modal.hide();
    auth.onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      console.log("user signed in: ", user); 
      document.cookie = "uid=" + user.uid;
      document.querySelectorAll(".logged-in").forEach(function(link) {
        link.style.display = "block";
      });
      document.querySelectorAll(".logged-out").forEach(function(link) {
        link.style.display = "none";
      });
    } else {
      // User is signed out.
      console.log("user signed out");
      document.querySelectorAll(".logged-in").forEach(function(link) {
        link.style.display = "none";
      });
      document.querySelectorAll(".logged-out").forEach(function(link) {
        link.style.display = "block";
      });
    }
  });

    // reset the form
    signUpForm.reset();
    auth.onAuthStateChanged(function(user) {
      document.cookie = "uid=" + user.uid;
      document.cookie = "uemail=" + user.email;
  });
  window.location.href = "projects.html";

    // show welcome message
    showMessage("Welcome " + userCredentials.user.email);

  } catch (error) {
    if (error.code === 'auth/email-already-in-use') {
      showMessage("Email already in use", "error")
    } else if (error.code === 'auth/invalid-email') {
      showMessage("Invalid email", "error")
    } else if (error.code === 'auth/weak-password') {
      showMessage("Weak password", "error")
    } else if (error.code) {
      showMessage("Something went wrong", "error")
    }
  }

});