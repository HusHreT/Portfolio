"use strict";

const skills = {
  data: [
    { name: 'html', level: 30, icon: 'html.svg' },
    { name: 'css', level: 40, icon: 'css.svg' },
    { name: 'python', level: 10, icon: 'python.svg' },
    { name: 'cpp', level: 70, icon: 'cpp.svg' },
  ],

  generateList: function(parentElement) {

    parentElement.innerHTML = '';
    this.data.forEach(skill => {

      const skillItem = document.createElement('dt');
      const skillLevel = document.createElement('dd');
      const skillPercent = document.createElement('div');

      const iconPath = `img/${skill.icon}`;

      skillItem.style.backgroundImage = `url(${iconPath})`;

      skillItem.classList.add('skill-item');
      skillLevel.classList.add('skill-level');

      skillItem.textContent = skill.name;

      skillPercent.style.width = `${skill.level}%`;
      skillPercent.textContent = `${skill.level}%`;

      skillLevel.appendChild(skillPercent);

      parentElement.append(skillItem, skillLevel);
      
    });
  },

  sortList: function(prop) {
    
    const isDescendingOrder = (prop === this.sortProperty) ? !this.isDescendingOrder : false;
    
    this.sortProperty = prop;
    
    this.isDescendingOrder = isDescendingOrder;
  
    if (isDescendingOrder) {
      this.data.reverse();
    } 
    else {
      this.data.sort(this.getComparer(prop));
    }
  
    this.generateList(skillList);
    
  },
  
  getComparer: function(prop) {
    return function(a, b) {
      switch (prop) {
        case 'name':
          return a[prop].localeCompare(b[prop]);
        case 'level':
          return a[prop] - b[prop];
        default:
          return 0;
      }
    };
  },
  
  sortProperty: '', 

  isDescendingOrder: false,

};

const skillList = document.querySelector('dl.skill-list');

skills.generateList(skillList);

const skillsSortBlock = document.querySelector('.sort');

skillsSortBlock.addEventListener('click', (e) => {

  const target = e.target;

  if (target.nodeName === 'BUTTON') {

    e.preventDefault();
    const property = target.dataset.type;
    skills.sortList(property);

  }
});

const menu = {
  open:function(navMenu, navButton) {

    navMenu.classList.remove('main-nav_closed');
    navButton.classList.remove('nav-btn_open');
    navButton.classList.add('nav-btn_close');
    navButton.innerHTML = 
    '<span class="visually-hidden">Закрыть меню</span>';
  },

  close:function(navMenu, navButton) {

    navMenu.classList.add('main-nav_closed');
    navButton.classList.remove('nav-btn_close');
    navButton.classList.add('nav-btn_open');
    navButton.innerHTML = 
    '<span class="visually-hidden">Открыть меню</span>';
  },

  toggleMenu: function(navMenu, navButton) {

    if (navMenu.classList.contains('main-nav_closed')) {
      this.open(navMenu, navButton);
    } 
    else {
      this.close(navMenu, navButton);
    }

  },

  init: function(navMenu, navButton) {
    this.close(navMenu, navButton);
    navButton.addEventListener('click', () => {

      this.toggleMenu(navMenu, navButton);
    });
  }

};

const navMenu = document.querySelector('.main-nav');

const navButton = document.querySelector('.nav-btn');

menu.init(navMenu, navButton);

const checkbox = document.querySelector('.switch-checkbox');

const themeKey = 'theme';

const savedTheme = localStorage.getItem(themeKey);

if (savedTheme) {

  document.body.classList.add(savedTheme);

}

checkbox.addEventListener('change', (e) => {

  if (e.target.checked) {
    document.body.classList.remove('dark-theme');
    localStorage.setItem(themeKey, 'white-theme');
  } else {
    document.body.classList.add('dark-theme');
    localStorage.setItem(themeKey, 'dark-theme');
  }

});

console.log(localStorage.getItem('theme'));