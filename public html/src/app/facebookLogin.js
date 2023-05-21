import { FacebookAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"
import { auth } from "./firebase.js";
import { showMessage } from "./showMessage.js";

const facebookButton = document.querySelector('#facebookLogin');

facebookButton.addEventListener('click', async e => {
  e.preventDefault();

  const provider = new FacebookAuthProvider();

  try {
    const credentials = await signInWithPopup(auth, provider)
    console.log(credentials);
    console.log("facebook sign in");
    auth.onAuthStateChanged(function(user) {
      document.cookie = "uid=" + user.uid;
      document.cookie = "uemail=" + user.email;
  });
    window.location.href = "projects.html";
    
    // Close the login modal
    const modal = bootstrap.Modal.getInstance(facebookButton.closest('.modal'));
    modal.hide();

    // show welcome message
    showMessage("Welcome" + credentials.user.email);
  } catch (error) {
    console.log(error);
  }

})

// import { FacebookAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"
// import { auth } from "./firebase.js";
// import { showMessage } from "./showMessage.js";

// const facebookButton = document.querySelector('#facebookLogin');

// facebookButton.addEventListener('click', async e => {
//   e.preventDefault();

//   const provider = new FacebookAuthProvider();

//   try {
//     const credentials = await signInWithPopup(auth,provider)
//     console.log(credentials);
//     console.log("facebook sign in");

//     const result = await signInWithPopup(auth, provider)
//       window.addEventListener('beforeunload', () => {
//         result.user.getIdToken().then((token) => {
//           // use the token to log in
//           console.log('User logged in with Facebook:', token);
//         });
//     });
    
//     // Close the login modal
//     const modal = bootstrap.Modal.getInstance(facebookButton.closest('.modal'));
//     modal.hide();

//     // show welcome message
//     showMessage("Welcome" + credentials.user.email);
//   } catch (error) {
//     console.log(error);
//   }

// })

// // Agregar este código para asegurarse de que se abra la ventana emergente al hacer clic en el botón de inicio de sesión de Facebook
