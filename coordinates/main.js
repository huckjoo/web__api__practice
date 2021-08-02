"use strict";

//Client Page 차이점
// 클릭된 지점의 client x,y page x,y출력
// 클릭된 놈의 rect obj 받아온다.

const special = document.querySelector(".special");

function handleClick(event){
    console.log(special.getBoundingClientRect());
    console.log(`Client : ${event.clientX},${event.clientY}`)
    console.log(`Page : ${event.pageX},${event.pageY}`)
}

special.addEventListener("click",handleClick)

const scroll = document.querySelector(".scroll__controls");
const scrollBy100 = scroll.querySelector("button:first-child");
const scrollTo100 = scroll.querySelector("button:nth-child(2)");
const scrollToSpecial = scroll.querySelector("button:last-child");

function handleScrollBy100(){
    window.scrollBy({ top:100, left:0, behavior: 'smooth'});
}
function handleScrollTo100(){
    window.scroll(0,100);
}
function handleScrollToSpecial(){
    special.scrollIntoView();
    //window.scroll(8,758);
}
scrollBy100.addEventListener("click", handleScrollBy100);
scrollTo100.addEventListener("click",handleScrollTo100);
scrollToSpecial.addEventListener("click",handleScrollToSpecial);
