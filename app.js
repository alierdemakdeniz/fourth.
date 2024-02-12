document.addEventListener("DOMContentLoaded",function(){
    showPopup();
});
let close = document.querySelector(".close-btn");
close.addEventListener("click",function(){
    closePopup();
});

let menu = document.querySelector(".nav-icon")
menu.addEventListener("click",function(){
    menuShow();
});

let icon= document.querySelector(".new-arrival-btn");

let first = document.querySelector("#first");
let second = document.querySelector("#second");

icon.addEventListener("click",slide);
function slide(e){
    
    if (e.target.id=="right-icon"){
        first.setAttribute("style","display : none")
        
    }
    if (e.target.id=="left-icon"){
        first.setAttribute("style","display : flex")
    }
    
    



    e.preventDefault();
}

function menuShow(){
    let a = document.querySelector("#menu-bar");
    if(a.className==="")
    a.classList.add("responsive");
    else {
        a.classList.remove("responsive")
    }
    
}


function showPopup() {
    let a = document.querySelector(".popup-background");
    if(a.className ==="popup-background") 
    a.classList.add("active")

}



function closePopup() {
    let a = document.querySelector(".popup-background");
    if(a.className ==="popup-background active") 
    a.classList.remove("active")

}