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
    const workFunction  = document.getElementById("input-company-function")

    
    const eduName = document.getElementById('input-edu-name');
    const eduDate = document.getElementById('input-edu-date');
    const eduPlace = document.getElementById('input-edu-place');
    const eduDescription = document.getElementById('input-edu-description');
    const addButtonBigEdu = document.getElementById('addButtonBigEdu')
    const eduContainer = document.getElementById('education-container')
    const eduList = document.getElementById('eduList')
    const eduCourse = document.getElementById('input-edu-course')


    addButtonBigWork.addEventListener('click', function(e) {
        e.preventDefault();
        const workNameV = workName.value;
        const workDateV = workDate.value;
        const workPlaceV = workPlace.value;
        const workDescriptionV = workDescription.value;
        const workFunctionV = workFunction.value;

        if(workNameV && workDateV && workPlaceV && workDescriptionV){

            const workListItem = document.createElement('li');
            workListItem.className = 'work-experience-item';
            workListItem.textContent = `function: ${workFunctionV} - Workplace: ${workNameV} - Date: ${workDateV} - City: ${workPlaceV} - Description: ${workDescriptionV}`;
            workListItem.draggable = true;

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

            workListItem.appendChild(removeButton);
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
        const eduCourseV = eduCourse.value;
        console.log(eduCourseV)

        if(eduNameV && eduDateV && eduPlaceV && eduDescriptionV){

            const eduListItem = document.createElement('li');
            eduListItem.className = 'edu-experience-item';
            eduListItem.textContent = `Course: ${eduCourseV} Institution: ${eduNameV} - Date: ${eduDateV} - City: ${eduPlaceV} - Description: ${eduDescriptionV}`;
            eduListItem.draggable = true;

            eduItem = document.createElement('div');
            eduItem.className = 'education-div';

            var headersDiv = document.createElement('div')
            headersDiv.className = 'text-pair'
            eduItem.appendChild(headersDiv)

            console.log(eduCourseV)
            var eduCourseSpan = document.createElement('span');
            eduCourseSpan.className = 'output-function';
            eduCourseSpan.textContent = eduCourseV;
            headersDiv.appendChild(eduCourseSpan);

            var eduNameSpan = document.createElement('span');
            eduNameSpan.className = 'output-name';
            eduNameSpan.textContent =` - ${eduNameV}` ;
            headersDiv.appendChild(eduNameSpan);

            var datePlaceDiv = document.createElement('div')
            datePlaceDiv.className = 'text-pair'
            eduItem.appendChild(datePlaceDiv)

            var eduIconSpan = document.createElement('i');
            eduIconSpan.className = "fa-solid fa-calendar-days";
            datePlaceDiv.appendChild(eduIconSpan);

            var eduDateSpan = document.createElement('span');
            eduDateSpan.className = 'output-date';
            eduDateSpan.textContent = eduDateV;
            datePlaceDiv.appendChild(eduDateSpan);

            
            var eduIconSpan = document.createElement('i');
            eduIconSpan.className = 'fa-solid fa-location-pin';
            datePlaceDiv.appendChild(eduIconSpan);

            var eduPlaceSpan = document.createElement('span');
            eduPlaceSpan.className = 'output-location';
            eduPlaceSpan.textContent = eduPlaceV;
            datePlaceDiv.appendChild(eduPlaceSpan);

            var eduDescriptionSpan = document.createElement('span');
            eduDescriptionSpan.className = 'output-description';
            eduDescriptionSpan.textContent = eduDescriptionV;
            eduItem.appendChild(eduDescriptionSpan);

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
            eduCourse.value = '';
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