const firebaseConfig = {
  apiKey: "AIzaSyAaKIP0iaMB1DDAuVKazAXfjLhs_flPEGY",
  authDomain: "let-chat-web-app-96c74.firebaseapp.com",
  projectId: "let-chat-web-app-96c74",
  storageBucket: "let-chat-web-app-96c74.appspot.com",
  messagingSenderId: "908785204014",
  appId: "1:908785204014:web:0d06e4db40051c06e518bf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//ADD YOUR FIREBASE LINKS HERE

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome  " + user_name + "!"

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}
getData();
