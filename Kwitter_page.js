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
  //YOUR FIREBASE LINKS

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();
function send()
{
    msg = document.getElementById("msg").value;
    firebaseConfig.database().ref(room_name).push({
        name:user_name,
        meassage:msg,
        like:0
    });

    document.getElementById("msg").value = "";
}