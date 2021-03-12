// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyC3mfiQtQmDy3nKVpnrKA9_iNHTnHSB8-8",
    authDomain: "kwitterapp-2fbe2.firebaseapp.com",
    databaseURL: "https://kwitterapp-2fbe2-default-rtdb.firebaseio.com",
    projectId: "kwitterapp-2fbe2",
    storageBucket: "kwitterapp-2fbe2.appspot.com",
    messagingSenderId: "234864500142",
    appId: "1:234864500142:web:25e5ea4bc30f4aeb303c3f"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS
function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    }
    );
}