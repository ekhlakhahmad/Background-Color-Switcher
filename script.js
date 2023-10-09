const Dark = document.querySelector("#Dark");
const Light = document.querySelector("#Light");
const Green = document.querySelector("#Green");
const Purple = document.querySelector("#Purple");
const Cyan = document.querySelector("#Cyan");
const Pink = document.querySelector("#Pink");

const body = document.querySelector("body");

Dark.addEventListener('click',function(e){
    body.style.backgroundColor="#000000";

})

Light.addEventListener('click',function(e){
    body.style.backgroundColor="#ffffff";

})

Green.addEventListener('click',function(e){
    body.style.backgroundColor="#0f766e";

})

Purple.addEventListener('click',function(e){
    body.style.backgroundColor="#7c3aed";

})

Cyan.addEventListener('click',function(e){
    body.style.backgroundColor="#155e75";

})

Pink.addEventListener('click',function(e){
    body.style.backgroundColor="#f472b6";

})
