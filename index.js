const emailText = document.getElementById("emailText");
const mysubmit = document.getElementById("mysubmit");
const error = document.getElementById("error")
const errorIcon = document.getElementById("errorIcon")
var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;




mysubmit.onclick = function(){
    
    if(emailText.value.trim() ==""){
        errorIcon.style.display = "block";
        error.textContent="You forgot to add your email";
    }
    else if(emailText.value.match(emailRegex)){
        errorIcon.style.display = "none";
        error.textContent = "";
    }  

    else{
        errorIcon.style.display = "block";
        error.textContent = "Please provide a Valid email";
    }
}
