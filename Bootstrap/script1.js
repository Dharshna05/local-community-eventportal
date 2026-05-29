console.log("Bootstrap 5 Project Loaded Successfully");

document.addEventListener("DOMContentLoaded",function(){

let registerBtn=document.querySelector(".btn-success");

registerBtn.addEventListener("click",function(){

alert("Registration Successful!");

});

});

let icons=document.querySelectorAll("footer i");

icons.forEach(function(icon){

icon.addEventListener("click",function(){

alert("Opening Social Media Page");

});

});