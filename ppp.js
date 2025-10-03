//DOM=>DOCUMENT ODJECT MODEL هي الطريقه التي تستطيع JSمن خلال التحكم و تعديل على العناصر بصفحه HTML
//تخزين البيانات بطريقتين 
//LOCAL STORAG=>المحافظه على البيانات حتى بعد اغلاق TAGS ,:::
//SET ITEM=>(key, value) لتخزين البيانات
 //GET ITEM=>(key)  لاسترجاع البيانات المخزنة
//value تُستخدم للحصول على أو تغيير قيمة
//Regex هي طريقة للتحقق من صحة البيانات مثل البريد الإلكتروني أو كلمة المرور
//Local Storage يخزن البيانات دائمًا كسلسلة نصية (String)

document.addEventListener("DOMContentLoaded", () => {
const sginform1 = document.getElementById("sginform1");
if (sginform1) {
        sginform1.addEventListener("submit", (e) => {
    e.preventDefault();
    
    let name = document.getElementById("FIRSTNAME").value.trim();
let lastname = document.getElementById("LASTNAME").value.trim();
let email=document.getElementById("EMAIL").value;
    let pass = document.getElementById("PASS").value;
    let confirm = document.getElementById("CONPASS").value;

    let users = JSON.parse(localStorage.getItem("users")) || [];

let emailtest = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let passtest = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;



    if (name ==="" && lastname ==="") {
        alert("Please register your name")
        return;
    }
    if (!emailtest.test(email)) {
        alert("Invalid email format")
        
    }
if (!passtest.test(pass)) {
        alert("Password must be 8+ chars, with uppercase, lowercase and number.");
        return;
}
    if (pass !== confirm) {
        alert("Passwords do not match.");
        return;
    }
    if (users.find((u) => u.email === email)) {
        alert("Email already registered.");
        return;
    }

    users.push({ name, email, password: pass });
    localStorage.setItem("users", JSON.stringify(users));
    funAlert.innerText="🎊🎊Signup successful!🎊🎊 ";
    funAlert.style.display="block";
    sginform1.reset();
setTimeout(()=>{
window.location.href = "LAST.html";
},3000);

});
}
});
//################pagge login##########

document.addEventListener("DOMContentLoaded", () => {
const loginform = document.getElementById("loginform");
if (loginform) {
        loginform.addEventListener("submit", (e) => {
    e.preventDefault();
    
    let EMAIL=document.getElementById("EMAIL1").value.trim();
    let pass1 = document.getElementById("PASS1").value;


    let users = JSON.parse(localStorage.getItem("users")) || [];
    let user = users.find((u) => u.email === EMAIL && u.password === pass1);

    if (!user) {
        alert("Invalid email or password.");
        return;
    }

    localStorage.setItem("currentUser", JSON.stringify(user));
    funAlert.innerText="🎊🎊loginform successful!🎊🎊 ";
    funAlert.style.display="block";
    loginform.reset();
setTimeout(()=>{
window.location.href = "LAST.html";
},3000);


});
}
});