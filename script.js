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

    const workName = document.getElementById('input-company-name');
    const workDate = document.getElementById('input-company-date');
    const workPlace = document.getElementById('input-company-place');
    const workDescription = document.getElementById('input-company-description');
    const addButtonBigWork = document.getElementById('addButtonBigWork');
    const workContainer = document.getElementById('work-container')
    const workList = document.getElementById('workList')

    
    const eduName = document.getElementById('input-edu-name');
    const eduDate = document.getElementById('input-edu-date');
    const eduPlace = document.getElementById('input-edu-place');
    const eduDescription = document.getElementById('input-edu-description');
    const addButtonBigEdu = document.getElementById('addButtonBigEdu')
    const eduContainer = document.getElementById('education-container')
    const eduList = document.getElementById('eduList')



    addButtonBigWork.addEventListener('click', function(e) {
        e.preventDefault();
        const workNameV = workName.value;
        const workDateV = workDate.value;
        const workPlaceV = workPlace.value;
        const workDescriptionV = workDescription.value;

        if(workNameV && workDateV && workPlaceV && workDescriptionV){

            const workListItem = document.createElement('li');
            workListItem.className = 'work-experience-item';
            workListItem.textContent = `Workplace: ${workNameV} - Date: ${workDateV} - City: ${workPlaceV} - Description: ${workDescriptionV}`;


            workItem = document.createElement('p');
            workItem.className = 'work-experience-paragraph';
            workItem.textContent = `Workplace: ${workNameV} - Workplace: ${workDateV} - Workplace: ${workPlaceV} - Workplace: ${workDescriptionV}`;

            const removeButton = document.createElement('button');
            removeButton.className = 'remove-button'
            removeButton.textContent = 'Remove';
            removeButton.addEventListener('click', function() {
                workListItem.remove();
                workItem.remove();
            });

            workListItem.appendChild(removeButton)
            workContainer.append(workItem);
            workList.append(workListItem);

            workName.value = '';
            workDate.value = '';
            workPlace.value = '';
            workDescription.value = '';
        }
    })

    addButtonBigEdu.addEventListener('click', function(e) {
        e.preventDefault();
        const eduNameV = eduName.value;
        const eduDateV = eduDate.value;
        const eduPlaceV = eduPlace.value;
        const eduDescriptionV = eduDescription.value;

        if(eduNameV && eduDateV && eduPlaceV && eduDescriptionV){

            const eduListItem = document.createElement('li');
            eduListItem.className = 'edu-experience-item';
            eduListItem.textContent = `Institution: ${eduNameV} - Date: ${eduDateV} - City: ${eduPlaceV} - Description: ${eduDescriptionV}`;


            eduItem = document.createElement('p');
            eduItem.className = 'education-paragraph';
            eduItem.textContent = `intitution: ${eduNameV} - date: ${eduDateV} - place: ${eduPlaceV} - description: ${eduDescriptionV}`;

            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remove';
            removeButton.className = 'remove-button'
            removeButton.addEventListener('click', function() {
                eduListItem.remove();
                eduItem.remove()
            });

            eduListItem.appendChild(removeButton)
            eduContainer.append(eduItem);
            eduList.append(eduListItem)

            eduName.value = '';
            eduDate.value = '';
            eduPlace.value = '';
            eduDescription.value = '';
        }
    })



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