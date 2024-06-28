document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('resumeForm');
    const resumeElements = {
        fullName: document.getElementById('resumeName'),
        jobTitle: document.getElementById('resumeJobTitle'),
        telephone: document.getElementById('resumePhone'),
        address: document.getElementById('resumeAddress'),
        email: document.getElementById('resumeEmail'),
        photo: document.getElementById('resumePhoto'),
        skills: document.getElementById('resumeSkills'),
        workContainer: document.querySelector('.work-container'),
        educationContainer: document.querySelector('.education-container')
    };

    // Draggable divider functionality
    const divider = document.getElementById('divider');
    const inputColumn = document.querySelector('.input-column');
    const resumeColumn = document.querySelector('.resume-column');
    let isDragging = false;

    divider.addEventListener('mousedown', function() {
        isDragging = true;
        document.addEventListener('mousemove', resize);
        document.addEventListener('mouseup', stopResize);
    });

    function resize(e) {
        if (isDragging) {
            const containerWidth = document.body.clientWidth;
            const newLeftWidth = e.clientX;
            const newRightWidth = containerWidth - newLeftWidth - divider.offsetWidth;

            inputColumn.style.width = newLeftWidth + 'px';
            resumeColumn.style.width = newRightWidth + 'px';
        }
    }

    function stopResize() {
        isDragging = false;
        document.removeEventListener('mousemove', resize);
        document.removeEventListener('mouseup', stopResize);
        updateContent();
    }

    // PDF Export functionality
    document.getElementById('exportPdf').addEventListener('click', exportToPdf);

    function exportToPdf() {
        console.log('Export to PDF function called');
        const element = document.querySelector('.resume-column');
        if (!element) {
            console.error('Resume column not found');
            return;
        }
        const opt = {
            margin: 10,
            filename: 'resume.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
        };
    
        html2pdf().set(opt).from(element).save().then(() => {
            console.log('PDF generated successfully');
        }).catch(err => {
            console.error('PDF generation failed:', err);
        });
    }

    form.addEventListener('input', updateResumeField);
    document.getElementById('profileImage').addEventListener('change', updateProfileImage);
    document.getElementById('addSkill').addEventListener('click', addSkill);
    document.getElementById('addWorkExperience').addEventListener('click', addWorkExperience);
    document.getElementById('addEducation').addEventListener('click', addEducation);

    initializeSortable('skillsList', updateResumeSkills);
    initializeSortable('workExperienceList', updateResumeWorkExperience);
    initializeSortable('educationList', updateResumeEducation);

    function updateResumeField(e) {
        const target = e.target;
        const resumeFieldId = target.id === 'fullName' ? 'resumeName' : 
                              target.id === 'telephone' ? 'resumePhone' : 
                              'resume' + target.id.charAt(0).toUpperCase() + target.id.slice(1);
        const resumeField = document.getElementById(resumeFieldId);
        if (resumeField) {
            resumeField.textContent = target.value;
        }
    }

    function updateProfileImage(e) {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                resumeElements.photo.src = e.target.result;
            }
            reader.readAsDataURL(file);
        }
    }

    function addSkill() {
        addItem('skillsList', 'skillName', 'skillLevel', createSkillItem, updateResumeSkills);
    }

    function addWorkExperience() {
        addItem('workExperienceList', ['jobName', 'company', 'jobDateTime', 'jobDescription'], null, createWorkExperienceItem, updateResumeWorkExperience);
    }

    function addEducation() {
        addItem('educationList', ['degree', 'institution', 'educationDateTime', 'educationDescription'], null, createEducationItem, updateResumeEducation);
    }

    function addItem(listId, inputIds, levelId, createItemFunc, updateFunc) {
        const values = Array.isArray(inputIds) ? inputIds.map(id => document.getElementById(id).value) : [document.getElementById(inputIds).value];
        const level = levelId ? document.getElementById(levelId).value : null;
        
        if (values.every(Boolean) && (!levelId || level)) {
            const list = document.getElementById(listId);
            const item = createItemFunc(...values, level);
            list.appendChild(item);
            updateFunc();
            values.forEach((_, index) => document.getElementById(Array.isArray(inputIds) ? inputIds[index] : inputIds).value = '');
            if (levelId) document.getElementById(levelId).value = '';
        }
    }

    function createSkillItem(name, level) {
        const item = document.createElement('div');
        item.className = 'list-item skill-item';
        item.innerHTML = `
            <span>${name} - Level: ${level}</span>
            <button type="button" class="remove-btn">Remove</button>
        `;
        item.querySelector('.remove-btn').addEventListener('click', () => {
            item.remove();
            updateResumeSkills();
        });
        return item;
    }

    function createWorkExperienceItem(jobName, company, jobDateTime, jobDescription) {
        const item = document.createElement('div');
        item.className = 'list-item work-item';
        item.innerHTML = `
            <span>${jobName} at ${company} (${jobDateTime})</span>
            <button type="button" class="remove-btn">Remove</button>
        `;
        item.dataset.description = jobDescription;
        item.querySelector('.remove-btn').addEventListener('click', () => {
            item.remove();
            updateResumeWorkExperience();
        });
        return item;
    }

    function createEducationItem(degree, institution, educationDateTime, educationDescription) {
        const item = document.createElement('div');
        item.className = 'list-item education-item';
        item.innerHTML = `
            <span>${degree} at ${institution} (${educationDateTime})</span>
            <button type="button" class="remove-btn">Remove</button>
        `;
        item.dataset.description = educationDescription;
        item.querySelector('.remove-btn').addEventListener('click', () => {
            item.remove();
            updateResumeEducation();
        });
        return item;
    }

    function updateResumeSkills() {
        const skillsContainer = resumeElements.skills;
        skillsContainer.innerHTML = '';
        document.querySelectorAll('#skillsList .skill-item').forEach(item => {
            const [name, level] = item.querySelector('span').textContent.split(' - Level: ');
            const skillPercentage = parseInt(level) * 20;
            const skillElement = document.createElement('div');
            skillElement.innerHTML = `
                <p class="skill-text">${name}</p>
                <div class="skills-bar" style="width: ${skillPercentage}%;"></div>
            `;
            skillsContainer.appendChild(skillElement);
        });
        updateContent();
    }

    function updateResumeWorkExperience() {
        resumeElements.workContainer.innerHTML = '<h2>Werkervaring</h2>';
        document.querySelectorAll('#workExperienceList .work-item').forEach(item => {
            const [jobName, company, dateTime] = item.querySelector('span').textContent.split(' at ');
            const [companyName, dateTimeStr] = company.split(' (');
            resumeElements.workContainer.innerHTML += `
                <div class="werkplek">
                    <ul class="werk">
                        <li>
                            <p class="position">${jobName} - ${companyName}</p>
                            <p class="date"><i class="fa-solid fa-calendar-days"></i> ${dateTimeStr.slice(0, -1)}</p>
                            <p class="description"><em>${item.dataset.description}</em></p>
                        </li>
                    </ul>
                </div>
            `;
        });
        updateContent();
    }

    function updateResumeEducation() {
        resumeElements.educationContainer.innerHTML = '<h2>Education</h2>';
        document.querySelectorAll('#educationList .education-item').forEach(item => {
            const [degree, institution, dateTime] = item.querySelector('span').textContent.split(' at ');
            const [institutionName, dateTimeStr] = institution.split(' (');
            resumeElements.educationContainer.innerHTML += `
                <div class="werkplek">
                    <ul class="werk">
                        <li>
                            <p class="position">${degree} - ${institutionName}</p>
                            <p class="date"><i class="fa-solid fa-calendar-days"></i> ${dateTimeStr.slice(0, -1)}</p>
                            <p class="description"><em>${item.dataset.description}</em></p>
                        </li>
                    </ul>
                </div>
            `;
        });
        updateContent();
    }

    function initializeSortable(elementId, onEndCallback) {
        new Sortable(document.getElementById(elementId), {
            animation: 150,
            ghostClass: 'sortable-ghost',
            onEnd: onEndCallback
        });
    }

    function updateContent() {
        checkPageOverflow();
    }

    function checkPageOverflow() {
        const resumeColumn = document.querySelector('.resume-column');
        let pages = resumeColumn.querySelectorAll('page');
        
        resumeColumn.querySelectorAll('.page-break').forEach(pb => pb.remove());
        Array.from(pages).slice(1).forEach(page => page.remove());
        
        const firstPage = pages[0];
        const leftPanel = firstPage.querySelector('.leftPanel');
        const rightPanel = firstPage.querySelector('.rightPanel');
        
        const pageHeight = firstPage.offsetHeight;
        
        let secondPage;
        
        if (leftPanel.scrollHeight > pageHeight) {
            secondPage = createNewPage();
            resumeColumn.appendChild(secondPage);
            moveOverflowContent(leftPanel, secondPage.querySelector('.leftPanel'), pageHeight);
        }
        
        if (rightPanel.scrollHeight > pageHeight) {
            if (!secondPage) {
                secondPage = createNewPage();
                resumeColumn.appendChild(secondPage);
            }
            moveOverflowContent(rightPanel, secondPage.querySelector('.rightPanel'), pageHeight);
        }
        
        if (secondPage) {
            const pageBreak = document.createElement('div');
            pageBreak.className = 'page-break';
            firstPage.parentNode.insertBefore(pageBreak, secondPage);
        }
    }

    function createNewPage() {
        const newPage = document.createElement('page');
        newPage.setAttribute('size', 'A4');
        
        const container = document.createElement('div');
        container.className = 'container';
        
        const leftPanel = document.createElement('div');
        leftPanel.className = 'leftPanel';
        const skillsContainer = document.createElement('div');
        skillsContainer.className = 'skill-container';
        leftPanel.appendChild(skillsContainer);
        
        const rightPanel = document.createElement('div');
        rightPanel.className = 'rightPanel';
        
        container.appendChild(leftPanel);
        container.appendChild(rightPanel);
        newPage.appendChild(container);
        
        return newPage;
    }

    function moveOverflowContent(sourcePanel, targetPanel, maxHeight) {
        let currentHeight = 0;
        const children = Array.from(sourcePanel.children);
        
        for (let i = 0; i < children.length; i++) {
            const child = children[i];
            const childHeight = child.offsetHeight;
            
            if (currentHeight + childHeight > maxHeight) {
                for (let j = i; j < children.length; j++) {
                    targetPanel.appendChild(children[j]);
                }
                break;
            }
            
            currentHeight += childHeight;
        }
    }

    updateContent();
    window.addEventListener('resize', updateContent);
});