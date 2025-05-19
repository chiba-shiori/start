"use strict";

const color = document.querySelectorAll(".site-header__nav-link");

const url = window.location.href;

color.forEach((color)=>{
  if(color.href === url){
    color.classList.add("current");
  }
});


const hamburgerBtn = document.getElementById('site-header__hamburger--btn');
const navMenu = document.getElementById('site-header__nav-menu');

hamburgerBtn.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});