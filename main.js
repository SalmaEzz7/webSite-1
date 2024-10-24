function darkMode(){
    var dark = document.getElementById('dark');
    var root = document.querySelector(':root');
    var change = document.querySelector('.sec-6');
    document.getElementById("imgg").src = "Gallary/img02.png";
    root.style.setProperty('--color-sec','black');
    root.style.setProperty('--color-white','black');
    root.style.setProperty('--color-foot','white');
    root.style.setProperty('--color-black','white');
    dark.style.color = "rgba(39, 39, 39, 0.726)";
    change.style.backgroundImage = 'none';
    change.style.backgroundColor = 'black';
}
function openNav(){
    var open = document.querySelector(".open-nav")
    if(open.style.display == "none"){
        open.style.display = "block";
    }
    else{
        open.style.display = "none";
    }
}

function avalid(){
    var username = document.getElementById("username").value;
    var mail = document.getElementById("mail").value;
    var pass = document.getElementById("pass").value;
    var copass = document.getElementById("copass").value;
    var error = document.getElementById("error");
    var test = "";

    if(username.length < 5){
       test = "please enter valid user_name"
       error.innerHTML = test ;
       return false;
    }
    else if(mail.indexOf("@")== -1 && mail.length < 10 ){
       test = "please enter valid email"
       error.innerHTML = test ;
       return false;
    }
    else if(pass.length < 8){
       test = "please enter valid password"
       error.innerHTML = test ;
       return false;
   }
   else if (copass == null || copass != pass){
       test = "please ener valid confirm password and cofirm your password"
       error.innerHTML = test ;
       return false;
   }
   else{
       alert("Done..")
       return true;
       
   }
}