var firebaseConfig = {
    apiKey: "AIzaSyDDbAeHGaZC9LdwZ1QUV0605IO5WW5Jwj4",
    authDomain: "kwitter-6becb.firebaseapp.com",
    databaseURL: "https://kwitter-6becb-default-rtdb.firebaseio.com",
    projectId: "kwitter-6becb",
    storageBucket: "kwitter-6becb.appspot.com",
    messagingSenderId: "328799852315",
    appId: "1:328799852315:web:ce6142ef86b1d4325ee5be",
    measurementId: "G-6X9PYXBL6L"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
          purpose : "adding room name"
    });

    localStorage.setItem("room_name", room_name);

    window.location = "Kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
    console.log("Room Name - " + Room_names);
    row = "<div class = 'room_name' id ="+Room_names+" onclick = 'redirectToRoomName(this.id)'>#"+ Room_names +"</div><hr>";
    document.getElementById("output").innerHTML += row;
    //End code
    });});}
getData();
function redirectToRoomName(name)
{
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "Kwittter_page.html";
}
function logout()
{
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "Kwitter.html";
}