
 var firebaseConfig = {
    apiKey: "AIzaSyAhfn0bhQaJPs6rsaGmMwmJPW-lvWSqlHc",
    authDomain: "the-c-app-7d79e.firebaseapp.com",
    databaseURL: "https://the-c-app-7d79e-default-rtdb.firebaseio.com",
    projectId: "the-c-app-7d79e",
    storageBucket: "the-c-app-7d79e.appspot.com",
    messagingSenderId: "252201426128",
    appId: "1:252201426128:web:fe34bafa90274fbc18d2d5",
    measurementId: "G-XPBLECRWM4"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function addUser()
  {
      user_name = document.getElementById("user_name").value;
      firebase.database().ref("/").child(user_name).update({
      purpose : "add in User"
      });
    }
    