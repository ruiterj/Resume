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
    const workContainer = document.getElementById('work-container');
    const workList = document.getElementById('workList');
    const workFunction = document.getElementById('input-company-function');

    const eduName = document.getElementById('input-edu-name');
    const eduDate = document.getElementById('input-edu-date');
    const eduPlace = document.getElementById('input-edu-place');
    const eduDescription = document.getElementById('input-edu-description');
    const addButtonBigEdu = document.getElementById('addButtonBigEdu');
    const eduContainer = document.getElementById('education-container');
    const eduList = document.getElementById('eduList');
    const eduCourse = document.getElementById('input-edu-course');

    addButtonBigWork.addEventListener('click', function(e) {
        e.preventDefault();
        const workNameV = workName.value;
        const workDateV = workDate.value;
        const workPlaceV = workPlace.value;
        const workDescriptionV = workDescription.value;
        const workFunctionV = workFunction.value;

        if (workNameV && workDateV && workPlaceV && workDescriptionV) {
            const workListItem = document.createElement('li');
            workListItem.className = 'work-experience-item';
            workListItem.textContent = `Function: ${workFunctionV} - Workplace: ${workNameV} - Date: ${workDateV} - City: ${workPlaceV} - Description: ${workDescriptionV}`;
            workListItem.draggable = true;

            const workItem = document.createElement('div');
            workItem.className = 'work-div';

            const headersDiv = document.createElement('div');
            headersDiv.className = 'text-pair-head';
            workItem.appendChild(headersDiv);

            const workFunctionSpan = document.createElement('span');
            workFunctionSpan.className = 'output-function';
            workFunctionSpan.textContent = workFunctionV;
            headersDiv.appendChild(workFunctionSpan);

            divider = document.createElement('p');
            divider.className = 'divider'
            divider.textContent = ' - ';
            headersDiv.appendChild(divider);


            const workNameSpan = document.createElement('span');
            workNameSpan.className = 'output-name';
            workNameSpan.textContent = `${workNameV}`;
            headersDiv.appendChild(workNameSpan);

            const datePlaceDiv = document.createElement('div');
            datePlaceDiv.className = 'text-pair';
            workItem.appendChild(datePlaceDiv);

            const workIconSpan1 = document.createElement('i');
            workIconSpan1.className = 'fa-solid fa-calendar-days';
            datePlaceDiv.appendChild(workIconSpan1);

            const workDateSpan = document.createElement('span');
            workDateSpan.className = 'output-date';
            workDateSpan.textContent = workDateV;
            datePlaceDiv.appendChild(workDateSpan);

            const workIconSpan2 = document.createElement('i');
            workIconSpan2.className = 'fa-solid fa-location-pin';
            datePlaceDiv.appendChild(workIconSpan2);

            const workPlaceSpan = document.createElement('span');
            workPlaceSpan.className = 'output-location';
            workPlaceSpan.textContent = workPlaceV;
            datePlaceDiv.appendChild(workPlaceSpan);

            const workDescriptionSpan = document.createElement('span');
            workDescriptionSpan.className = 'output-description';
            workDescriptionSpan.textContent = workDescriptionV;
            workItem.appendChild(workDescriptionSpan);

            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remove';
            removeButton.className = 'remove-button';
            removeButton.addEventListener('click', function() {
                workListItem.remove();
                workItem.remove();
            });

            workListItem.appendChild(removeButton);
            workContainer.append(workItem);
            workList.append(workListItem);

            workName.value = '';
            workDate.value = '';
            workPlace.value = '';
            workDescription.value = '';
            workFunction.value = '';
        }
    });

    addButtonBigEdu.addEventListener('click', function(e) {
        e.preventDefault();
        const eduNameV = eduName.value;
        const eduDateV = eduDate.value;
        const eduPlaceV = eduPlace.value;
        const eduDescriptionV = eduDescription.value;
        const eduCourseV = eduCourse.value;
    
        if (eduNameV && eduDateV && eduPlaceV && eduDescriptionV) {
            const eduListItem = document.createElement('li');
            eduListItem.className = 'edu-experience-item';
            eduListItem.textContent = `Course: ${eduCourseV} Institution: ${eduNameV} - Date: ${eduDateV} - City: ${eduPlaceV} - Description: ${eduDescriptionV}`;
            eduListItem.draggable = true;
    
            const eduItem = document.createElement('div');
            eduItem.className = 'education-div';
    
            const headersDiv = document.createElement('div');
            headersDiv.className = 'text-pair-head';
            eduItem.appendChild(headersDiv);
    
            const eduCourseSpan = document.createElement('span');
            eduCourseSpan.className = 'output-function';
            eduCourseSpan.textContent = eduCourseV;
            headersDiv.appendChild(eduCourseSpan);
    
            divider = document.createElement('p');
            divider.className = 'divider';
            divider.textContent = ' - ';
            headersDiv.appendChild(divider);
    
            const eduNameSpan = document.createElement('span');
            eduNameSpan.className = 'output-name';
            eduNameSpan.textContent = eduNameV;
            headersDiv.appendChild(eduNameSpan);
    
            const datePlaceDiv = document.createElement('div');
            datePlaceDiv.className = 'text-pair';
            eduItem.appendChild(datePlaceDiv);
    
            const eduIconSpan1 = document.createElement('i');
            eduIconSpan1.className = 'fa-solid fa-calendar-days';
            datePlaceDiv.appendChild(eduIconSpan1);
    
            const eduDateSpan = document.createElement('span');
            eduDateSpan.className = 'output-date';
            eduDateSpan.textContent = eduDateV;
            datePlaceDiv.appendChild(eduDateSpan);
    
            const eduIconSpan2 = document.createElement('i');
            eduIconSpan2.className = 'fa-solid fa-location-pin';
            datePlaceDiv.appendChild(eduIconSpan2);
    
            const eduPlaceSpan = document.createElement('span');
            eduPlaceSpan.className = 'output-location';
            eduPlaceSpan.textContent = eduPlaceV;
            datePlaceDiv.appendChild(eduPlaceSpan);
    
            const eduDescriptionSpan = document.createElement('span');
            eduDescriptionSpan.className = 'output-description';
            eduDescriptionSpan.textContent = eduDescriptionV;
            eduItem.appendChild(eduDescriptionSpan);
    
            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remove';
            removeButton.className = 'remove-button';
            removeButton.addEventListener('click', function() {
                eduListItem.remove();
                eduItem.remove();
            });
    
            eduListItem.appendChild(removeButton);
            eduContainer.append(eduItem);
            eduList.append(eduListItem);
    
            eduName.value = '';
            eduDate.value = '';
            eduPlace.value = '';
            eduDescription.value = '';
            eduCourse.value = '';
        }
    });

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