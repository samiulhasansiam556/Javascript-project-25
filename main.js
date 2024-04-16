
// import './style.css'

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import {getAuth,
//   FacebookAuthProvider,
//   signInWithPopup,
//   onAuthStateChanged,
//   signOut
// } from "firebase/auth";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyANQ2aXkpP781qwAbJg3g-G-nb4kWBHKqU",
//   authDomain: "auth-facebook-71152.firebaseapp.com",
//   projectId: "auth-facebook-71152",
//   storageBucket: "auth-facebook-71152.appspot.com",
//   messagingSenderId: "755171909285",
//   appId: "1:755171909285:web:baaf757849d87ff604774c"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);


// const auth = getAuth(app);


// const provider = new FacebookAuthProvider();

// function loginWithFacebook(){
//    signInWithPopup(auth,provider).then((result)=>{
//      console.log("sdrg");
//      const credintial = FacebookAuthProvider.credentialFromResult(result);
//      const token = credintial.accessToken;
//      const user = result.user;

//    }).catch((err)=>{
//     console.log(err);
//    })

//   }


//   const fb_login_btn = document.querySelector("#fb_login_btn");
 
//    fb_login_btn.addEventListener("click",loginWithFacebook);






   
//   onAuthStateChanged(auth,(user)=>{
//      if(user){
//       console.log("asdd");
//       document.querySelector(".user_form").classList.add("hide");
//       document.querySelector(".admin_page").classList.add("show");
//      }


//   })


//    function logOut(){
//     signOut(auth).then(()=>{
//       document.querySelector(".user_form").classList.remove("hide");
//       document.querySelector(".admin_page").classList.remove("show");
//     })

//    }



//   const logout_btn = document.querySelector("#logout_btn")
 
//    logout_btn.addEventListener("click",logOut);







import "./style.css";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  FacebookAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut
} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA0Fhaxx7l3DXyOp6RkfjRmRm6vP0Md6sM",
  authDomain: "auth-f-793de.firebaseapp.com",
  projectId: "auth-f-793de",
  storageBucket: "auth-f-793de.appspot.com",
  messagingSenderId: "802832062713",
  appId: "1:802832062713:web:307445387e8bb185f36a28"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const Provider = new FacebookAuthProvider();  // Changed provider to FacebookAuthProvider

// Login with Facebook
function loginWithFacebook() {
  signInWithPopup(auth, Provider).then((result) => {
    // Use FacebookAuthProvider instead of GoogleAuthProvider
    const credential = FacebookAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
  }).catch((err) => {
    console.log(err);
  });
}

const fb_login_btn = document.querySelector("#fb_login_btn");
fb_login_btn.addEventListener('click', loginWithFacebook);  // Corrected function name

// onAuthStateChanged
onAuthStateChanged(auth, (user) => {
  if (user) {
    document.querySelector('.user_form').classList.add('hide');
    document.querySelector('.admin_pages').classList.add('show');
  } else {
    console.log("sorry");
  }
});

// Sign out User
function logoutUser() {
  signOut(auth).then(() => {
    document.querySelector('.user_form').classList.remove('hide');
    document.querySelector('.admin_pages').classList.remove('show');
  });
}

const logout_btn = document.querySelector('#logout');
logout_btn.addEventListener('click', logoutUser);