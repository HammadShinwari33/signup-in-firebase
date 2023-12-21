
// Your web app's Firebase configuration
const firebaseApp = firebase.initializeApp ({
    apiKey: "AIzaSyBTGi1KsAPTSxvRDGRwd0y9XQXzNuM37Ko",
    authDomain: "personal-blogging-app-b70b8.firebaseapp.com",
    projectId: "personal-blogging-app-b70b8",
    storageBucket: "personal-blogging-app-b70b8.appspot.com",
    messagingSenderId: "473660248759",
    appId: "1:473660248759:web:c2c582a6b5257e5655f332"
  });
  
  // Initialize Firebase
  const auth = firebaseApp.auth();

//  ============================== SignUp ================================

function signinCall(){
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    auth.signInWithEmailAndPassword(email, password)
    .then((res) => {
        alert("SignIn success");
        console.log(res);
    })
    .catch((error) => {
        alert(error);
        console.log(error);
    })

  };
  signinCall();
