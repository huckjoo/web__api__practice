"use strict";

const mousePosition = document.querySelector('.mousePosition');
const mouseRow = document.querySelector(".mouseRow");
const mouseColumn = document.querySelector(".mouseColumn");
const mouseImg = document.querySelector("img");
const imgHalfWidth = mouseImg.getBoundingClientRect().width/2;
const imgHalfHeight = mouseImg.getBoundingClientRect().height/2;



function handleMouseMove(event){
    mousePosition.innerHTML = `${event.clientX}px,${event.clientY}px`;
    mousePosition.style.transform = `translate(${event.clientX+15}px,${event.clientY+25}px)`;
    mouseRow.style.transform = `translate(0,${event.clientY}px)`;
    mouseColumn.style.transform = `translate(${event.clientX}px)`
    mouseImg.style.transform = `translate(${event.clientX}px,${event.clientY}px) translate(-50%,-50%)`;

}

window.addEventListener("mousemove",handleMouseMove);