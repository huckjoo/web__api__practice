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
    createList(value);
    // const delBtn = document.querySelectorAll(".delBtn");
    // delBtn.forEach((x)=>x.addEventListener("click",handleDelete));

    }
    let id=0;
function createList(value){
    const li = document.createElement("li");
    li.setAttribute("class","list__item");
    li.setAttribute("data-id",id);
    li.innerHTML = `
        <span class="list__text">${value}
            <button class="list__delBtn">
                <i class="delBtn fas fa-trash" data-id=${id}></i>
            </button>
        </span>
        `
    mainLists.appendChild(li);
    // button.addEventListener("click",()=>{
    //     ul.removeChild(li);//수많은 li중에 어떻게 그 li인지 알지? 클로저때문
    // })
    li.scrollIntoView();//이것도 클로저 때문인가?
    id++;
}
function allKill(){
    const ul = document.querySelector(".main__list");
    while(ul.firstChild){
        ul.removeChild(ul.firstChild);
    }
}
inputForm.addEventListener("submit",handleSubmit);
addBtn.addEventListener("click",handleSubmit);
allKillBtn.addEventListener("click",allKill);
mainLists.addEventListener("click",(event)=>{
    const id = event.target.dataset.id;
    if(id){
        const tobeDeleted = document.querySelector(`.list__item[data-id="${id}"]`);//왜 ${id}값에 ""를 붙여야 하는가?
        tobeDeleted.remove();
    }
})

