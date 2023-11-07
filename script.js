let btn = document.getElementById("btn");
let btnText = document.getElementById("btn-text");

btn.onclick = function(){
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        btnText.innerHTML = "Toggle Light Mode";
    }else{
        btnText.innerHTML = "Toggle Dark Mode";
    }
}