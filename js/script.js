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
        parentElement.appendChild(skillItem);
        parentElement.appendChild(skillLevel);
      });
    },
  
    sortList: function(prop) {
      const isDescendingOrder = (prop === this.sortProperty) ? !this.isDescendingOrder : false;
      this.sortProperty = prop;
      this.isDescendingOrder = isDescendingOrder;
  
      this.data.sort(this.getComparer(prop));
      if (isDescendingOrder) {
        this.data.reverse();
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

const skillsSortBlock = document.querySelector('.skills-title');
skillsSortBlock.addEventListener('click', (e) => {
  const target = e.target;
  if (target.nodeName === 'BUTTON') {
    e.preventDefault();
    const property = target.dataset.type;
    skills.sortList(property);
  }
});

function compare() {
    skills.data.sort(function(a, b) {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
  
    return 0;
 });
};

function getComparer(prop) {
    return function(a, b) {

      if (a[prop] < b[prop]) {
        return -1;
      }
      if (a[prop] > b[prop]) {
        return 1;
      }
  
      return 0;
    };
  }