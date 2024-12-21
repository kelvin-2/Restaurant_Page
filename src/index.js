import './style.css';
import {loadHome} from './home.js';
import{loadMenu} from './menu.js';
import {loadContact} from './contact.js';

//load the homepage 
loadHome();

const content=document.querySelector('#content');
const nav=document.querySelector('nav');

nav.addEventListener('click',(e)=>{
    switch (e.target.textContent) {
        case 'HOME':
            loadHome();
            return;
        case 'MENU':
            loadMenu();
            return;
        case 'CONTACT':
            loadContact();
            return;
    }
});