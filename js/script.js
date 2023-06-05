const skills = {
    data: [
    { name: 'html', level: 30, icon: 'html.svg'},
    { name: 'css', level: 40, icon: 'css.svg'},
    { name: 'python', level: 10,  icon: 'python.svg'},
    { name: 'cpp', level: 70, icon: 'cpp.svg'},
    ],

    generateList: function(parentElement) {
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
}
};
const skillList = document.querySelector('dl.skill-list');
skills.generateList(skillList);