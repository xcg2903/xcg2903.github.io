//Variables games
let tsbutton;
let tsclose;
let npcbutton;
let npcclose;
let pabutton;
let paclose;
let fallbutton;
let fallclose;
let lockebutton;
let lockeclose;
let matbutton;
let matclose;
let ropebutton;
let ropeclose;
let carbutton;
let carclose;
let sunkbutton;
let sunkclose;
let lampbutton;
let lampclose;
let tinybutton;
let tinyclose;
let bubblebutton;
let bubbleclose;

//Variables projects
let frogbutton;
let frogclose;
let graphicsbutton;
let graphicsclose;


window.onload = init
function init(){
    console.log("script imported");
    tsbutton = document.querySelector("#gallerydiv1");
    tsclose = document.querySelector("#teamspiritclose");
    npcbutton = document.querySelector("#gallerydiv2");
    npcclose = document.querySelector("#npcsclose");
    pabutton = document.querySelector("#gallerydiv3");
    paclose = document.querySelector("#abolethclose");
    fallbutton = document.querySelector("#gallerydiv4");
    fallclose = document.querySelector("#fallingclose");
    lockebutton = document.querySelector("#gallerydiv5");
    lockeclose = document.querySelector("#lockeclose");
    matbutton = document.querySelector("#gallerydiv6");
    matclose = document.querySelector("#matterclose");
    ropebutton = document.querySelector("#gallerydiv7");
    ropeclose = document.querySelector("#ropetoolclose");
    carbutton = document.querySelector("#gallerydiv8");
    carclose = document.querySelector("#caravanclose");
    sunkbutton = document.querySelector("#gallerydiv9");
    sunkclose = document.querySelector("#sunkenclose");
    lampbutton = document.querySelector("#gallerydiv12");
    lampclose = document.querySelector("#lamplitclose");
    tinybutton = document.querySelector("#gallerydiv13");
    tinyclose = document.querySelector("#tinysaursclose");
    bubblebutton = document.querySelector("#gallerydiv14");
    bubbleclose = document.querySelector("#bubbleclose");

    tsbutton.addEventListener('click', function(){ PopUp('#teamspirit')});
    tsclose.addEventListener('click', function(){ Close('#teamspirit')});
    npcbutton.addEventListener('click', function(){ PopUp('#npcs')});
    npcclose.addEventListener('click', function(){ Close('#npcs')});
    pabutton.addEventListener('click', function(){ PopUp('#aboleth')});
    paclose.addEventListener('click', function(){ Close('#aboleth')});
    fallbutton.addEventListener('click', function(){ PopUp('#falling')});
    fallclose.addEventListener('click', function(){ Close('#falling')});
    lockebutton.addEventListener('click', function(){ PopUp('#locke')});
    lockeclose.addEventListener('click', function(){ Close('#locke')});
    matbutton.addEventListener('click', function(){ PopUp('#matter')});
    matclose.addEventListener('click', function(){ Close('#matter')});
    ropebutton.addEventListener('click', function(){ PopUp('#ropetool')});
    ropeclose.addEventListener('click', function(){ Close('#ropetool')});
    carbutton.addEventListener('click', function(){ PopUp('#caravan')});
    carclose.addEventListener('click', function(){ Close('#caravan')});
    sunkbutton.addEventListener('click', function(){ PopUp('#sunken')});
    sunkclose.addEventListener('click', function(){ Close('#sunken')});
    lampbutton.addEventListener('click', function(){ PopUp('#lamplit')});
    lampclose.addEventListener('click', function(){ Close('#lamplit')});
    tinybutton.addEventListener('click', function(){ PopUp('#tinysaurs')});
    tinyclose.addEventListener('click', function(){ Close('#tinysaurs')});
    bubblebutton.addEventListener('click', function(){ PopUp('#bubble')});
    bubbleclose.addEventListener('click', function(){ Close('#bubble')});
}

function PopUp(name){
    document.querySelector(name).classList.add('is-active');
}

function Close(name){
    document.querySelector(name).classList.remove('is-active');
}