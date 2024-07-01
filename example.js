document.addEventListener('DOMContentLoaded', function () {
    const addButton = document.getElementById('button-add')
    const skillNameInput = document.getElementById('skillName')
    const skillLevelInput = document.getElementById('skillLevel')
    const skillList = document.getElementById('skillList')
    const skillContainer = document.getElementById('skill-container')


    addButton.addEventListener('click', function() {
        const skillName = skillNameInput.value;
        const skillLevel = skillLevelInput.value;

        if (skillName && skillLevel) {
            const listItem = document.createElement('li');
            listItem.textContent = `${skillName} - Level: ${skillLevel}`;
;
            skillList.appendChild(listItem)


            const skillNameSpan = document.createElement('span'); 
            skillNameSpan.textContent = skillName;
            skillContainer.appendChild(skillNameSpan);

            const skillBar = document.createElement('div');
            skillBar.className = 'skill-bar';
            skillBar.style.width = `${parseInt(skillLevel) * 20}%`;
            skillContainer.appendChild(skillBar)


            skillNameInput.value = '';
            skillLevelInput.value = '';

        }
    })
})