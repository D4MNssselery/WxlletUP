const wrapper = document.querySelector(".wrapper")
const mainblock = document.querySelector(".mainblock")
const loginLink = document.querySelector(".login-link")
const registerLink = document.querySelector(".register-link")
const btnPopup = document.querySelector(".btnLogin-popup")
const CloseIcon = document.querySelector(".close-icon")
const Moreinfo = document.querySelector(".AboutGame")
const Closehelper = document.querySelector(".closeMenu")


registerLink.addEventListener('click', ()=> {
  wrapper.classList.add('active')
});


loginLink.addEventListener('click', ()=> {
  wrapper.classList.remove('active')
});

btnPopup.addEventListener('click', ()=> {
  wrapper.classList.add('active-popup')
});

CloseIcon.addEventListener('click', ()=> {
  wrapper.classList.remove('active-popup')
});

Moreinfo.addEventListener('click', ()=> {
  mainblock.classList.add('active')
});


Closehelper.addEventListener('click', ()=> {
  mainblock.classList.remove('active')
});
