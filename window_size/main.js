"use strict";
const screen = document.querySelector(".window__screen");
const outer = document.querySelector(".window__outer");
const inner = document.querySelector(".window__inner");
const client = document.querySelector(".window__clientWidth");

function handleResize(){
    screen.innerHTML = `window.screen: ${window.screen.width}px,${window.screen.height}px`;
    outer.innerHTML = `window.outer: ${window.outerWidth}px,${window.outerHeight}px`;
    inner.innerHTML = `window.inner: ${window.innerWidth}px,${window.innerHeight}px`;
    client.innerHTML = `documentElement.clientWidth: ${document.documentElement.clientWidth}px,${document.documentElement.clientHeight}px`;
}
handleResize();
window.addEventListener("resize",handleResize)

const img = document.querySelector("img");
