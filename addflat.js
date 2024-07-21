const flatName = document.getElementById('flatName');
const city = document.getElementById('city');
const streetNumber = document.getElementById('streetNumber');
const streetName = document.getElementById('streetName');
const floorArea = document.getElementById('floorArea');
const yearOfConstruction = document.getElementById('yearOfConstruction');
const rentPrice = document.getElementById('rentPrice');
const availableDates = document.getElementById('availableDates');
const yesAC = document.getElementById('yesAC');
const noAC = document.getElementById('noAC');
const addBtn = document.getElementById('addBtn');
let AC =false;

const dataFromLS = JSON.parse(localStorage.getItem('registerUsers'));
const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

const flatsList =  dataFromLS.find(user =>  user.email === loggedInUser.email).userFlats;







flatName.addEventListener('blur', ()=>{
    let errorflatName = document.getElementById('flatNameErrorHint');

    if(flatName.value.trim() === ''){
        errorflatName.textContent = "This field is required";
        errorflatName.style.color = 'red';
    }
    else if(flatName.value.length >= 2 ){
        errorflatName.textContent = ' The input is a valid first name format';
        errorflatName.style.color ='green';
    }
    else{
        errorflatName.textContent = 'This input is not a valid first name format';
        errorflatName.style.color ='red';
    }
})

city.addEventListener('blur', ()=>{
    let errorCity = document.getElementById('cityErrorHint');

    if(city.value.trim() === ''){
        errorCity.textContent = "This field is required";
        errorCity.style.color = 'red';
    }
    else if(city.value.length >= 2 ){
        errorCity.textContent = ' The input is a valid first name format';
        errorCity.style.color ='green';
    }
    else{
        errorCity.textContent = 'This input is not a valid first name format';
        errorCity.style.color ='red';
    }
})

streetName.addEventListener('blur', ()=>{
    let errorStreetName = document.getElementById('streetNameErrorHint');

    if(streetName.value.trim() === ''){
        errorStreetName.textContent = "This field is required";
        errorStreetName.style.color = 'red';
    }
    else if(streetName.value.length >= 2 ){
        errorStreetName.textContent = ' The input is a valid first name format';
        errorStreetName.style.color ='green';
    }
    else{
        errorStreetName.textContent = 'This input is not a valid first name format';
        errorStreetName.style.color ='red';
    }
})
streetNumber.addEventListener('blur', ()=>{
    let errorStreetNumber = document.getElementById('streetNumberErrorHint');

    if(streetNumber.value.trim() === ''){
        errorStreetNumber.textContent = "This field is required";
        errorStreetNumber.style.color = 'red';
    }
    else if(streetNumber.value.length >= 2 ){
        errorStreetNumber.textContent = ' The input is a valid first name format';
        errorStreetNumber.style.color ='green';
    }
    else{
        errorStreetNumber.textContent = 'This input is not a valid first name format';
        errorStreetNumber.style.color ='red';
    }
})

floorArea.addEventListener('blur', ()=>{
    let errorFloorArea = document.getElementById('floorAreaErrorHint');

    if(floorArea.value.trim() === ''){
        errorFloorArea.textContent = "This field is required";
        errorFloorArea.style.color = 'red';
    }
    else {
        errorFloorArea.textContent = ' The input is a valid ';
        errorFloorArea.style.color ='green';
    }

})

yearOfConstruction.addEventListener('blur', ()=>{
    let errorYearOfConstruction = document.getElementById('yearOfConstructionErrorHint');

    if(yearOfConstruction.value.trim() === ''){
        errorYearOfConstruction.textContent = "This field is required";
        errorYearOfConstruction.style.color = 'red';
    }
    else {
        errorYearOfConstruction.textContent = ' The input is a valid ';
        errorYearOfConstruction.style.color ='green';
    }

})

rentPrice.addEventListener('blur', ()=>{
    let errorRentPrice = document.getElementById('rentPriceErrorHint');

    if(rentPrice.value.trim() === ''){
        errorRentPrice.textContent = "This field is required";
        errorRentPrice.style.color = 'red';
    }
    else {
        errorRentPrice.textContent = ' The input is a valid ';
        errorRentPrice.style.color ='green';
    }

})

availableDates.addEventListener('blur', ()=>{
    let errorAvailableDates = document.getElementById('availableDatesErrorHint');

    if(availableDates.value.trim() === ''){
        errorAvailableDates.textContent = "This field is required";
        errorAvailableDates.style.color = 'red';
    }
    else {
        errorAvailableDates.textContent = ' The input is a valid ';
        errorAvailableDates.style.color ='green';
    }

})

function addFlat(){
    let errorCheckBox= document.getElementById('checkBoxErrorHint');


    if(yesAC.checked && noAC.checked){
        errorCheckBox.textContent = "Check only one box";
        errorCheckBox.style.color = 'red';

    }
    else if(noAC.checked){
        console.log('Hasnt AC');
        AC = false;
       }
      else if(yesAC.checked){
        console.log('Has AC');
        AC = true;
      }
    else if(!yesAC.checked || !noAC.check){
        errorCheckBox.textContent = "Check at least one box";
        errorCheckBox.style.color = 'red';
    }


        const flatDetails = {
            flatName : flatName.value,
            city : city.value,
            streetName : streetName.value,
            streetNumber : streetNumber.value,
            floorArea : floorArea.value,
            yearOfConstruction : yearOfConstruction.value,
            rentPrice : rentPrice.value,
            availableDates: availableDates.value,
            AC : AC,
            favorite :false
        }

        flatsList.push(flatDetails);

        dataFromLS.forEach((user) =>  {
            if(user.email === loggedInUser.email){
                user.userFlats.concat(flatsList);
            }
        })



    localStorage.setItem('registerUsers',JSON.stringify(dataFromLS));
}

addBtn.addEventListener('click', addFlat)

