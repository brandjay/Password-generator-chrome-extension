var password=document.getElementById("passgen");
var chars = "012345689abcdefghijklmnopqrstuvwxyz#*!@ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var passlength = 8;
var password = "";

 for (var i = 0; i <= passlength; i++) {
   var randomNumber = Math.floor(Math.random() * chars.length);
   password += chars.substring(randomNumber, randomNumber +1);
  }

  document.getElementById("passgen").value = password;

function cPass() {
  var copyPass = document.getElementById("passgen");
  copyPass.select();
  document.execCommand("copy");  
}