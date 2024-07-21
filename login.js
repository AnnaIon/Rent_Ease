const email =  document.getElementById('loginEmail');
const password =  document.getElementById('loginPassword');

const errorLogin = document.getElementById('loginError');
const errorEmail = document.getElementById('emailErrorHint');
const errorPassword = document.getElementById('passwordErrorHint');

const loginBtn = document.getElementById('loginBtn');

const dataFromLS = JSON.parse(localStorage.getItem('registerUsers'));
const usersArray = dataFromLS ? dataFromLS: [] ;

console.log(dataFromLS);

function handleLogin(){

    console.log(email.value);
    console.log(password.value);
    if(email.value === '' || email.value === null){
        errorEmail.innerHTML =`The field can't be empty`;
        errorEmail.classList.add('error');
       
    }
    else{
        errorEmail.innerHTML='';
        errorEmail.classList.remove('error');
    }
    if(password.value  === '' || password.value === null){
        errorPassword.innerHTML=`The field can't be empty`;
        errorPassword.classList.add('error');
        
    }
    else{
        errorPassword.innerHTML = '';
        errorPassword.classList.remove('error');
    }

    if(!email.value || !password.value)      
    return;
    
   const user = dataFromLS.find(user => email.value === user.email);
     
   console.log(user);

   const loggedInUser={
    username : user.username,
    email : user.email,
    password :user.password,
    firstName: user.firstName,
    lastName : user.lastName,
    userDOB: user.userDOB,
    favorite : user.favorite,
    userFlat:user.userFlats
   }

   console.log(loggedInUser);

   localStorage.setItem('loggedInUser',JSON.stringify(loggedInUser));   

   const macthingPassword = user.password  === password.value;

   if(!macthingPassword){
    console.log('nu');
    errorLogin.innerHTML = `Wrong Password`;
    errorLogin.classList.add('error');
    return;
  }
   if(!user){
    console.log('nu');
    errorLogin.innerHTML = `Account doesn't exist`;
    errorLogin.classList.add('error');
    return;
  }
  else{
    window.location = 'homepage.html'
  }
  





}

loginBtn.addEventListener('click', handleLogin);


