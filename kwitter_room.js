
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
    document.getElementById("user_name").innerHTML="welcome "+user_name+"!";
    function addRoom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
      });
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html";
    }


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room_name-"+Room_names);
      row="<div class='room_name' id="+Room_names+ "onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=room;
      //End code
      });});}
getData();

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}