"use strict";

const color = document.querySelectorAll(".site-header__nav-link");

const url = window.location.href;

color.forEach((color)=>{
  if(color.href === url){
    color.classList.add("current");
  }
});
