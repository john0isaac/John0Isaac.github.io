// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyAdANW8abKU-ms4TPDF_46bu0fgUU2Tpfs",
    authDomain: "portfolio-eb898.firebaseapp.com",
    projectId: "portfolio-eb898",
    storageBucket: "portfolio-eb898.appspot.com",
    messagingSenderId: "153553083273",
    appId: "1:153553083273:web:a56059044b739420b69f58",
    measurementId: "G-KCQZEWNJB7"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('sub').addEventListener('click', submitForm);

// Submit Form
function submitForm(e){
    e.preventDefault();

    // Get Values
    var fname = getInputVal('fname');
    var lname = getInputVal('lname');
    var email = getInputVal('email');
    var message = getInputVal('message');

    // Save message
    saveMessage(fname, lname, email, message);

    // Show alert
    document.querySelector('.alert').style.display= 'block';

    // Hide alert for 3 seconds
    setTimeout(function(){
        document.querySelector('.alert').style.display= 'none';
    }, 3000);

    // Clear Form
    var form = document.getElementsByName("contactForm")[0];
    form.reset();
    
}

// Function to get form values
function getInputVal(id){
    return document.getElementById(id).value;
  }

// Save message to firebase
function saveMessage(fname, lname, email, message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        fname: fname,
        lname: lname,
        email: email,
        message:message
    });
}

