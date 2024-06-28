
// get form values
const nameInput = document.getElementById('fullNameInput')
const jobTitleInput = document.getElementById('jobTitleInput')
const telNumberInput = document.getElementById('telNumberInput')
const adressInput = document.getElementById('adressInput')
const emailInput = document.getElementById('emailInput')



// Update resume when input changes
nameInput.addEventListener('input', updateResume)
jobTitleInput.addEventListener('input', updateResume)
telNumberInput.addEventListener('input', updateResume)
adressInput.addEventListener('input', updateResume)
emailInput.addEventListener('input', updateResume)


function updateResume() {

    // update name
    const name = nameInput.value
    const fullNameDisplay = document.getElementById('fullNameDisplay')
    fullNameDisplay.textContent = name;

    // update Job title
    const jobTitle = jobTitleInput.value
    const jobTitleDisplay = document.getElementById('jobTitleDisplay')
    jobTitleDisplay.textContent = jobTitle;

    // update telephone number
    const telNumber = telNumberInput.value
    const telNumberDisplay = document.getElementById('telNumberDisplay')
    telNumberDisplay.textContent = telNumber

    const adress = adressInput.value
    const adressDisplay = document.getElementById('adressDisplay')
    adressDisplay.textContent = adress

    const email = emailInput.value
    const emailDisplay  = document.getElementById('emailDisplay')
    emailDisplay.textContent = email


}