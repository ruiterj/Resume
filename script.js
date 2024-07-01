document.addEventListener('DOMContentLoaded', function () {    
    // get form values
    const nameInput = document.getElementById('fullNameInput');
    const jobTitleInput = document.getElementById('jobTitleInput');
    const telNumberInput = document.getElementById('telNumberInput');
    const adressInput = document.getElementById('adressInput');
    const emailInput = document.getElementById('emailInput');
    const addButton = document.getElementById('addButtonSmall');
    const skillNameInput = document.getElementById('skillNameInput');
    const skillLevelInput = document.getElementById('skillLevelInput');
    const skillList = document.getElementById('skillList');
    const skillContainer = document.getElementById('resumeSkills');

    addButton.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent form submission
        const skillName = skillNameInput.value;
        const skillLevel = skillLevelInput.value;

        if (skillName && skillLevel) {
            const listItem = document.createElement('li');
            listItem.textContent = `${skillName} - Level: ${skillLevel}`;
            skillList.appendChild(listItem);

            const skillWrapper = document.createElement('div');
            skillWrapper.className = 'skill-wrapper';

            const skillNameSpan = document.createElement('span');
            skillNameSpan.textContent = skillName;
            skillWrapper.appendChild(skillNameSpan);

            const skillBar = document.createElement('div');
            skillBar.className = 'skill-bar';
            skillBar.style.width = `${parseInt(skillLevel) * 20}%`;
            skillWrapper.appendChild(skillBar);

            skillContainer.appendChild(skillWrapper);

            skillNameInput.value = '';
            skillLevelInput.value = '';
        }
    });

    // Update resume when input changes
    nameInput.addEventListener('input', updateResume);
    jobTitleInput.addEventListener('input', updateResume);
    telNumberInput.addEventListener('input', updateResume);
    adressInput.addEventListener('input', updateResume);
    emailInput.addEventListener('input', updateResume);

    function updateResume() {
        // update name
        const name = nameInput.value;
        const fullNameDisplay = document.getElementById('fullNameDisplay');
        fullNameDisplay.textContent = name;

        // update Job title
        const jobTitle = jobTitleInput.value;
        const jobTitleDisplay = document.getElementById('jobTitleDisplay');
        jobTitleDisplay.textContent = jobTitle;

        // update telephone number
        const telNumber = telNumberInput.value;
        const telNumberDisplay = document.getElementById('telNumberDisplay');
        telNumberDisplay.textContent = telNumber;

        const adress = adressInput.value;
        const adressDisplay = document.getElementById('adressDisplay');
        adressDisplay.textContent = adress;

        const email = emailInput.value;
        const emailDisplay = document.getElementById('emailDisplay');
        emailDisplay.textContent = email;

        
    }
});