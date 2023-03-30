
var firebaseConfig = {
      apiKey: "AIzaSyATe8uX0vNDKzm8QSdIsBV91GGgr8RsS0g",
      authDomain: "kwitter-be0fd.firebaseapp.com",
      databaseURL: "https://kwitter-be0fd-default-rtdb.firebaseio.com",
      projectId: "kwitter-be0fd",
      storageBucket: "kwitter-be0fd.appspot.com",
      messagingSenderId: "374115362247",
      appId: "1:374115362247:web:0388f5597e27c4fee7e5e2"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem("user_name");
    room_name=localStorage.getItem("room_name")

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
function send(){
      msg=document.getElementById.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      })
      document.getElementById("msg").value="";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}