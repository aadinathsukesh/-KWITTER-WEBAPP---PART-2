var firebaseConfig = {
    apiKey: "AIzaSyD5ovgC0q0RnPvvAM0YQmiSWaUhcqbTD30",
    authDomain: "kwitter-app-5c771.firebaseapp.com",
    databaseURL: "https://kwitter-app-5c771-default-rtdb.firebaseio.com",
    projectId: "kwitter-app-5c771",
    storageBucket: "kwitter-app-5c771.appspot.com",
    messagingSenderId: "488982267624",
    appId: "1:488982267624:web:79b56ad3b36db3785b2b5d",
    measurementId: "G-LF2W0X29FN"
  };
    firebase.initializeApp(firebaseConfig);

function addRoom()
{
  add_room = document.getElementById("add_room").ariaValueMax;
  firebase.database().ref("/").child(add_room).update({
    purpose : "adding room"
  });
}