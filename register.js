const userName = document.getElementById('username');
const userEmail = document.getElementById('registerEmail');
const userPassword= document.getElementById('registerPassword');
const userFirstName= document.getElementById('firstName');
const userLastName= document.getElementById('lastName');
const userDOB= document.getElementById('DOB');
const registerBtn =  document.getElementById('registerBtn');
const userFlats = [];

const dataFromLS = JSON.parse(localStorage.getItem('registerUsers'));

const usersArray = dataFromLS ? dataFromLS: [] ;







   

userName.addEventListener('blur', ()=>{
    let errorName = document.getElementById('usernameErrorHint');
    const regex = /^[a-zA-Z]+$/;

    if(userName.value.trim() === ''){
        errorName.textContent = "This field is required";
        errorName.classList.add('red');
    }
    else if(regex.test(userName.value)){
        errorName.textContent = ' The input is a valid string';
        errorName.classList.add('green');
    }
    else{
        errorName.textContent = 'This input is not a valid string';
        errorName.classList.add('red');
    }

   

})

userEmail.addEventListener('blur', ()=>{
    let errorEmail = document.getElementById('emailErrorHint');

    const regex = /[a-z0-9]+@[a-z]+\.[a-z]{2}/;

    if(userEmail.value.trim() === ''){
        errorEmail.textContent = "This field is required";
        errorEmail.classList.add('red');
    }
    else if(regex.test(userEmail.value)){
        errorEmail.textContent = ' The input is a valid email format';
        errorEmail.classList.add('green');
    }
    else{
        errorEmail.textContent = 'This input is not a valid email format';
        errorEmail.classList.add('red');
    }

    
})
userPassword.addEventListener('blur', ()=>{
    let errorPassword = document.getElementById('passwordErrorHint');

    const regex = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,})/;

    if(userPassword.value.trim() === ''){
        errorPassword.textContent = "This field is required";
        errorPassword.classList.add('red');
    }
    else if(regex.test(userPassword.value)){
        errorPassword.textContent = ' The input is a valid password format';
        errorPassword.classList.add('green');
    }
    else{
        errorPassword.textContent = 'This input is not a valid password format';
        errorPassword.classList.add('red');
    }

})
userFirstName.addEventListener('blur', ()=>{
    let errorfirstName = document.getElementById('firstNameErrorHint');

    if(userFirstName.value.trim() === ''){
        errorfirstName.textContent = "This field is required";
        errorfirstName.classList.add('red');
    }
    else if(userFirstName.value.length >= 2 ){
        errorfirstName.textContent = ' The input is a valid first name format';
        errorfirstName.classList.add('green');
    }
    else{
        errorfirstName.textContent = 'This input is not a valid first name format';
        errorfirstName.classList.add('red');
    }

})

userLastName.addEventListener('blur', ()=>{
    let errorlastName = document.getElementById('lastNameErrorHint');

    if(userLastName.value.trim() === ''){
        errorlastName.textContent = "This field is required";
        errorlastName.classList.add('red');
    }
    else if(userLastName.value.length >= 2 ){
        errorlastName.textContent = ' The input is a valid last name format';
        errorlastName.classList.add('green');
    }
    else{
        errorlastName.textContent = 'This input is not a valid last name format';
        errorlastName.classList.add('red');
    }

})
userDOB.addEventListener('blur', ()=>{
    let errorDOB = document.getElementById('dobErrorHint');
    const dateOfBirth = new Date(userDOB.value);
    let currentDate = new Date();
    let age = currentDate.getFullYear() - dateOfBirth.getFullYear();


    if(userDOB.value.trim() === ''){
        errorDOB.textContent = "This field is required";
        errorDOB.classList.add('red');
    }
    else if(age >= 18 && age <= 120 ){
        errorDOB.textContent = ' Correct age';
        errorDOB.classList.add('green');
    }
    else{
        errorDOB.textContent = 'Incorrect age';
        errorDOB.classList.add('red');
    }

})

registerBtn.addEventListener('click', ()=> {

    const userData={
        username : userName.value,
        email : userEmail.value,
        password :userPassword.value,
        firstName: userFirstName.value,
        lastName : userLastName.value,
        userDOB: userDOB.value,
        userFlats:[]
    }
   
    const doesUserExist = usersArray.some(userObject => userObject.email=== userData.email);

    if(doesUserExist){
        console.log('Account already exist');
        return;
    }
    else{
        window.location = 'login.html'
    }

    usersArray.push(userData);
    localStorage.setItem('registerUsers',JSON.stringify(usersArray));   
        
    
    
})

