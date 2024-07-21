const userName = document.getElementById('username');
const userEmail = document.getElementById('registerEmail');
const userPassword= document.getElementById('registerPassword');
const userFirstName= document.getElementById('firstName');
const userLastName= document.getElementById('lastName');
const userDOB= document.getElementById('DOB');
const saveBtn =  document.getElementById('saveBtn');


const dataFromLS = JSON.parse(localStorage.getItem('registerUsers'));
const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

console.log(loggedInUser);

userName.addEventListener('blur', ()=>{
    let errorName = document.getElementById('usernameErrorHint');
    const regex = /^[a-zA-Z]+$/;

    if(userName.value.trim() === ''){
        errorName.textContent = "This field is required";
        errorName.style.color = 'red';
    }
    else if(regex.test(userName.value)){
        errorName.textContent = ' The input is a valid string';
        errorName.style.color ='green';
    }
    else{
        errorName.textContent = 'This input is not a valid string';
        errorName.style.color ='red';
    }

   

})

userEmail.addEventListener('blur', ()=>{
    let errorEmail = document.getElementById('emailErrorHint');

    const regex = /[a-z0-9]+@[a-z]+\.[a-z]{2}/;

    if(userEmail.value.trim() === ''){
        errorEmail.textContent = "This field is required";
        errorEmail.style.color = 'red';
    }
    else if(regex.test(userEmail.value)){
        errorEmail.textContent = ' The input is a valid email format';
        errorEmail.style.color ='green';
    }
    else{
        errorEmail.textContent = 'This input is not a valid email format';
        errorEmail.style.color ='red';
    }

    
})
userPassword.addEventListener('blur', ()=>{
    let errorPassword = document.getElementById('passwordErrorHint');

    const regex = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,})/;

    if(userPassword.value.trim() === ''){
        errorPassword.textContent = "This field is required";
        errorPassword.style.color = 'red';
    }
    else if(regex.test(userPassword.value)){
        errorPassword.textContent = ' The input is a valid password format';
        errorPassword.style.color ='green';
    }
    else{
        errorPassword.textContent = 'This input is not a valid password format';
        errorPassword.style.color ='red';
    }

})
userFirstName.addEventListener('blur', ()=>{
    let errorfirstName = document.getElementById('firstNameErrorHint');

    if(userFirstName.value.trim() === ''){
        errorfirstName.textContent = "This field is required";
        errorfirstName.style.color = 'red';
    }
    else if(userFirstName.value.length >= 2 ){
        errorfirstName.textContent = ' The input is a valid first name format';
        errorfirstName.style.color ='green';
    }
    else{
        errorfirstName.textContent = 'This input is not a valid first name format';
        errorfirstName.style.color ='red';
    }

})

userLastName.addEventListener('blur', ()=>{
    let errorlastName = document.getElementById('lastNameErrorHint');

    if(userLastName.value.trim() === ''){
        errorlastName.textContent = "This field is required";
        errorlastName.style.color = 'red';
    }
    else if(userLastName.value.length >= 2 ){
        errorlastName.textContent = ' The input is a valid last name format';
        errorlastName.style.color ='green';
    }
    else{
        errorlastName.textContent = 'This input is not a valid last name format';
        errorlastName.style.color ='red';
    }

})
userDOB.addEventListener('blur', ()=>{
    let errorDOB = document.getElementById('dobErrorHint');
    const dateOfBirth = new Date(userDOB.value);
    let currentDate = new Date();
    let age = currentDate.getFullYear() - dateOfBirth.getFullYear();


    if(userDOB.value.trim() === ''){
        errorDOB.textContent = "This field is required";
        errorDOB.style.color = 'red';
    }
    else if(age >= 18 && age <= 120 ){
        errorDOB.textContent = ' Correct age';
        errorDOB.style.color ='green';
    }
    else{
        errorDOB.textContent = 'Incorrect age';
        errorDOB.style.color ='red';
    }

})

userName.value = loggedInUser.username;
userEmail.value = loggedInUser.email;
userPassword.value = loggedInUser.password;
userFirstName.value = loggedInUser.firstName;
userLastName.value = loggedInUser.lastName;
userDOB.value = loggedInUser.userDOB;


function saveData(){


    const userData={
        username : userName.value,
        email : userEmail.value,
        password :userPassword.value,
        firstName: userFirstName.value,
        lastName : userLastName.value,
        userDOB: userDOB.value,
        userFlats: loggedInUser.userFlat
    }
   
    

    const newArray = dataFromLS.map(obj => obj.email === loggedInUser.email ? userData : obj);

    console.log(newArray);

    const user = dataFromLS.find(user => userEmail.value === user.email);

    console.log(user);
    localStorage.setItem("loggedInUser",JSON.stringify(userData)); 
    localStorage.setItem("registerUsers",JSON.stringify(newArray));  

    


}

saveBtn.addEventListener('click', saveData);