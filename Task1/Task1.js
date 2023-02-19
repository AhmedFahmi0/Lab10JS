function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
      }
       document.body.style.background = "#00FF40";
       var bgd=document.getElementById("form-bgd");
       var form=document.getElementById("form");
       var btn=document.getElementById("sub");
       //var user=document.getElementById("name");
       var pass=document.getElementById("password");
       var comp=document.getElementById("comp"); 
       var err     
       bgd.style.backgroundColor="white";
       bgd.style.width = "350px";
       bgd.style.height = "300px";
       form.style.padding="50px";
       bgd.style.boxShadow="3px 7px 7px #00693E";
       btn.style.width="250px";
       email.style.width="245px";
       pass.style.width="245px";
       btn.style.height="40px";
       email.style.height="30px";
       pass.style.height="30px";
       btn.style.background = "#00FF40";
       btn.style.borderWidth="0px";
       btn.style.padding="0px";
       btn.style.color="white";
       comp.style.position="flex";
       comp.style.flexDirection="column";
       comp.style.justifyContent="space-around";
       bgd.style.position="relative";
       bgd.style.left="75vh";
       bgd.style.top="25vh";
       form.style.position="relative";
       form.style.top="10px";
      function btnact(){
          var userv=document.getElementById("name").value;
       var passv=document.getElementById("password").value;
       if (userv == "admin" && passv == "123") {
            alert("Welcome login success");
          } else if (userv != "admin" && passv == "123") {
            alert("Incorrect Username");
          } else if (userv == "admin" && passv != "123") {
            alert("Incorrect Password");
          } else {
            alert("Incorrect Username and Password");
          }
      };
  
      function validateForm(){
      var email=document.getElementById("email");
      if (email.value == "") {
      printError("emailErr", "Please enter your email address");
      } else {
      // Regular expression for basic email validation
      var regex = /^\S+@\S+\.\S+$/;
      if (regex.test(email.value) === false) {
  
  
        printError("emailErr", "Please enter a valid email address");
      } else {
        printError("emailErr", "");
      }
    }
  
      var pass=document.getElementById("password")
    if (pass.value == "") {
      printError("passErr", "Please enter your password");
    } else {
      var regex1 = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])[A-Za-z0-9]{8,}$/;
  
      if (regex1.test(pass.value) === false) {
        printError("passErr", "Please enter a valid password");
      } else {
        printError("passErr", "");
      }
    }
  }