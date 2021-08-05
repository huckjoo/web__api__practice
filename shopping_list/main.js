"use strict";
const mainLists = document.querySelector(".main__list");
const inputForm = document.querySelector(".input__form");
const input = document.querySelector(".input__list");
const addBtn = document.querySelector(".add-list__button");
const allKillBtn = document.querySelector(".header__button");
function handleSubmit(event){  
    event.preventDefault();
    const value = input.value;
    if (value === ""){
        input.focus();
        return
    }
    input.value="";
    input.focus();
    const ul = document.querySelector(".main__list");
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");
    button.innerHTML=`<i class="delBtn fas fa-trash"></i>`;
    button.setAttribute("class","list__delBtn")
    span.innerHTML = `${value}`;
    span.setAttribute("class","list__text");
    span.appendChild(button);

    li.setAttribute("class","list__item");
    li.appendChild(span);
    mainLists.appendChild(li);
    button.addEventListener("click",()=>{
        ul.removeChild(li);//수많은 li중에 어떻게 그 li인지 알지? 클로저때문
    })
    li.scrollIntoView();//이것도 클로저 때문인가?
    // const delBtn = document.querySelectorAll(".delBtn");
    // delBtn.forEach((x)=>x.addEventListener("click",handleDelete));

    }

// function handleDelete(event){
//     this.parentNode.parentNode.remove();
// }
function allKill(){
    const ul = document.querySelector(".main__list");
    while(ul.firstChild){
        ul.removeChild(ul.firstChild);
    }
}
inputForm.addEventListener("submit",handleSubmit);
addBtn.addEventListener("click",handleSubmit);
allKillBtn.addEventListener("click",allKill);


