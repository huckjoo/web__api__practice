"use strict";

const mousePosition = document.querySelector('.mousePosition');
const mouseRow = document.querySelector(".mouseRow");
const mouseColumn = document.querySelector(".mouseColumn");
const mouseImg = document.querySelector("img");
function handleMouseMove(event){
    mousePosition.innerHTML = `${event.clientX}px,${event.clientY}px`;
    mousePosition.style.left = `${event.clientX+20}px`;
    mousePosition.style.top = `${event.clientY+30}px`;
    mouseRow.style.top = `${event.clientY}px`;
    mouseColumn.style.left = `${event.clientX}px`
    mouseImg.style.top = `${event.clientY}px`;
    mouseImg.style.left = `${event.clientX}px`
}

window.addEventListener("mousemove",handleMouseMove);