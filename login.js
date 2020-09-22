 // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDBb0wp4eLNQ591g-y_2x9zwzlFVIuzdcg",
    authDomain: "login-ea8e7.firebaseapp.com",
    databaseURL: "https://login-ea8e7.firebaseio.com",
    projectId: "login-ea8e7",
    storageBucket: "login-ea8e7.appspot.com",
    messagingSenderId: "398050071196",
    appId: "1:398050071196:web:9306c1301729c5016f1359"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
 
  
  

   firebase.auth.Auth.Persistence.LOCAL;

   $("#login").click(function(){

   var email = $("#email").val();
   var password = $("#password").val();

   if(email != "" && password != "")
   {
     var result = firebase.auth().signInWithEmailAndPassword(email,password);


     result.catch(function(error)
     {
       var errorCode = error.code;
       var errorMessage = error.message;

       console.log(errorCode);
       console.log(errorMessage);
       window.alert("Message :" + errorMessage);
      });
     }
   else
   {
     window.alert("Please fill all the details");
   }
 });


 $("#Register").click(function(){

var email = $("#emailid").val();
var password = $("#password").val();
var Firstname = $("#fn").val();
var Lastname = $("#ln").val();
var cpassword = $("#cpassword").val();
var dob = $("#mydate").val();

 if(email != "" && password != "" && cpassword != "" && Firstname != "" && Lastname != "" && dob !="")
 {
  if(password == cpassword)
  {
    var result = firebase.auth().createUserWithEmailAndPassword(email,password);
     result.catch(function(error)
    {
      var errorCode = error.code;
      var errorMessage = error.message;
 
      console.log(errorCode);
      console.log(errorMessage);
      window.alert("Message :" + errorMessage);
     });
    }
     else
     {
      window.alert("Password do not match with Confirm password");
     }
   }
 else
 {
   window.alert("Please fill all the details");
 }
});


// const submitBtn = document.querySelector("#Register");
//   let Firstname = document.querySelector("#fn");
//   let Lastname = document.querySelector("#ln");
//   let emailid = document.querySelector("#emailid");
//   let dob = document.querySelector("#mydate");
  

//   const db = firestore.collection("details");

//   submitBtn.addEventListener('click', function(){
//       let textInput =text.value;
//       let firstnameInput =Firstname.value;
//       let lastnameInput =Lastname.value;
//       let emailidInput =emailid.value;
//       let dobInput =dob.value;
      


//       //access the db collection
//       db.add({
//           text:  textInput,
//           firstname:  firstnameInput,
//           lastname:lastnameInput,
//           emailid:emailidInput,
//           dob:dobInput,

          
//       }).then(function(){
//           console.log("Data Saved")
//       }).catch(function(error){
//           console.log(error);
//       });
      
      
//   });

//   const side = document.querySelector("#side");
 

// db.get().then(function(querySnapshot) {
// querySnapshot.forEach(function(doc) {
      
//   side.innerHTML += "<div  class='side'><p > " + doc.data().text + "</p>"
// });
// });



// $("#submit").click(function()
// {
//   var auth = firebase.auth();
//   var email= $("#email").val();


//   if(email != "")
//   {
//     auth.sendPasswordResetEmail(email).then(function()
//     {
//       window.alert("Email has been sent to your Mail ID");
//     })
//     .catch(function(error)
//     {
//       var errorCode = error.code;
//       var errorMessage = error.message;
 
//       console.log(errorCode);
//       console.log(errorMessage);
//       window.alert("Message :" + errorMessage);
//     });
//  }
//   else
//   {
//     window.alert("Please enter your Email ID");
//   }
// });

// $("#edit").click(function(){
//   var email = $("#email").val();
//   var password = $("#password").val();
//   var name = $("#fname").val();
//   var profession = $("#prof").val();
//   var cpassword = $("#cpassword").val();
//   var number = $("#number").val();

//   var rootRef = firebase.database().ref().child("userdetails");
//   var userID = firebase.auth().currentUser.uid;
//   var usersRef = rootRef.child(userID);

//   if(email != "" && password != "" && cpassword != "" && name != "" && profession != "" && number != "")
//   {
//     if(password == cpassword)
//     {
//       var userData =
//       {
//         "email": email,
//         "password":password,
//         "name":name,
//         "profession":profession,
//         "confirmpassword": cpassword,
//         "number": number,
//       };

//       userRef.set(userData, function(error)
//       {
//         if(error)
//         {
//           var errorCode = error.code;
//           var errorMessage = error.message;
     
//           console.log(errorCode);
//           console.log(errorMessage);
//           window.alert("Message :" + errorMessage);
//         }
//         else
//         {
//           window.location.href = "editprofile.html";
//         }
//       });
//     }
//     else
//     {
//       window.alert("Password do not match with Confirm password");
//     }
//   }
//   else
//   {
//     window.alert("Please fill all the details");
//   }
// });


