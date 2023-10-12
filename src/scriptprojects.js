//Variables projects
let frogbutton;
let frogclose;
let graphicsbutton;
let graphicsclose;


window.onload = init
function init(){
    console.log("script imported");
    frogbutton = document.querySelector("#gallerydiv10");
    frogclose = document.querySelector("#wizardfrogclose");
    graphicsbutton = document.querySelector("#gallerydiv11");
    graphicsclose = document.querySelector("#graphicsclose");

    frogbutton.addEventListener('click', function(){ PopUp('#wizardfrog')});
    frogclose.addEventListener('click', function(){ Close('#wizardfrog')});
    graphicsbutton.addEventListener('click', function(){ PopUp('#graphics')});
    graphicsclose.addEventListener('click', function(){ Close('#graphics')});
}

function PopUp(name){
    document.querySelector(name).classList.add('is-active');
}

function Close(name){
    document.querySelector(name).classList.remove('is-active');
}