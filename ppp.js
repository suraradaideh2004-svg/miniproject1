let form = document.querySelector(".form1");
let FIRSTNAME = document.getElementById("FIRSTNAME");
let LASTNAME = document.getElementById("LASTNAME");
let PASS = document.getElementById("PASS");
let CONPASS=document.getElementById("CONPASS");
// confirm password
let EMAIL = document.getElementById("EMAIL");
let BUTTON=document.getElementsByClassName("BUTTON");
    const funAlert = document.getElementById("funAlert");

// Saved in Local storage

 let ErrorMsgCorrect = document.getElementsByClassName("ErrorMsgCorrect");
 let ErrorMsg = document.getElementsByClassName("ErrorMsg");

 form.addEventListener("submit", function(e) {
e.preventDefault();});

FIRSTNAME.addEventListener("click",function(){
    FIRSTNAME.focus();
});
LASTNAME.addEventListener("click",function(){
    LASTNAME.focus();
});
PASS.addEventListener("click",function(){
    PASS.focus();
});
EMAIL.addEventListener("click",function(){
    EMAIL.focus();
});

let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if (FIRSTNAME.value === ""||  LASTNAME.value==="" ) {


    FIRSTNAME.parentElement.querySelector(".ErrorMsg").style.display = "block";

    FIRSTNAME.parentElement.querySelector(".ErrorMsgCorrect").style.display = "none";
} else {

    FIRSTNAME.parentElement.querySelector(".ErrorMsgCorrect").style.display = "block";

    FIRSTNAME.parentElement.querySelector(".ErrorMsg").style.display = "none";
}

let allValid=true;

//رح يتحقق انه الايميل صح

 if (!emailPattern.test(EMAIL.value)) {
  EMAIL.parentElement.querySelector(".ErrorMsg").style.display = "block";

    EMAIL.parentElement.querySelector(".ErrorMsgCorrect").style.display = "none";
    allValid=false;
} else {

    EMAIL.parentElement.querySelector(".ErrorMsgCorrect").style.display = "block";

    EMAIL.parentElement.querySelector(".ErrorMsg").style.display = "none";
    localStorage.setItem("emailPattern", EMAIL.value);
}
// رح يتحقق انه كلمه السر من 8 احرف

if (PASS.value.length<8) {
        PASS.parentElement.querySelector(".ErrorMsgCorrect").style.display = "none";

    PASS.parentElement.querySelector(".ErrorMsg").style.display = "block";
    allValid=false;
}

else {

    PASS.parentElement.querySelector(".ErrorMsgCorrect").style.display = "block";

    PASS.parentElement.querySelector(".ErrorMsg").style.display = "none";
localStorage.setItem("PASS",PASS.value);
}

// رح يقارن بين كلمتين السر
if (CONPASS.value!=PASS.value){

CONPASS.parentElement.querySelector(".ErrorMsgCorrect").style.display = "none";

    CONPASS.parentElement.querySelector(".ErrorMsg").style.display = "block";
    allValid=false;
}

else {

    CONPASS.parentElement.querySelector(".ErrorMsgCorrect").style.display = "block";

    CONPASS.parentElement.querySelector(".ErrorMsg").style.display = "none";
localStorage.setItem("CONPASS",CONPASS.value);
}


    //🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉 النهايه يالصفحتين
if(allValid){
funAlert.innerText = "🎉 All fields are correct!";
funAlert.style.display = "block";

setTimeout(() =>
    { funAlert.style.display = "none";
window.location.href ="LASTNAME.HTML";},5000);
form.reset();
    document.querySelectorAll(".ErrorMsgCorrect").forEach(p => p.style.display = "none");}











