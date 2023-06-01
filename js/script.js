const skills = {
    data: [
    { name: 'html', level: 30, class: 'skill-item skill-item_html', icon: 'html.svg'},
    { name: 'css', level: 40, class: 'skill-item skill-item_css', icon: 'css.svg'},
    { name: 'python', level: 10, class: 'skill-item skill-item_python',  icon: 'python.svg'},
    { name: 'cpp', level: 70, class: 'skill-item skill-item_cpp', icon: 'cpp.svg'},
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
        skillPercent.classList.add(skill.cssClass);

        skillItem.textContent = skill.name;
        skillLevel.textContent = `${skill.level}%`;

        skillPercent.style.width = `${skill.level}%`;
        skillLevel.appendChild(skillPercent);

        parentElement.appendChild(skillItem);
        parentElement.appendChild(skillLevel);
    });
}
};
const skillList = document.querySelector('dl.skill-list');
skills.generateList(skillList);