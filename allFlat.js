const dataFromLS = JSON.parse(localStorage.getItem('registerUsers'));
const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

const btn = document.getElementById('button');
const mainCard =document.querySelector('main');
const cards =document.getElementById('cards');
const inputArray = document.querySelectorAll('input');
const filterBtn = document.getElementById('filterBtn');

const flatsList =  dataFromLS.find(user =>  user.email === loggedInUser.email).userFlats;


const minPriceRent = document.getElementById('filterMinPrice');
const maxPriceRent = document.getElementById('filterMaxPrice');
const filterCity = document.getElementById('filterCity');
const maxfloorArea = document.getElementById('filterMaxFloorArea');
const minfloorArea = document.getElementById('filterMinFloorArea');



function filterData(){

    const minPrice = minPriceRent.value;
    const maxPrice = maxPriceRent.value;
    const cityName = filterCity.value;
    const maxArea = maxfloorArea.value;
    const minArea = minfloorArea.value;

    let filterArray = flatsList;

    if(cityName){
    filterArray = filterArray.filter(apartmentObj => apartmentObj.city.includes(cityName));
    }

    if(minPrice || maxPrice){
        console.log(minPrice);
        console.log(maxPrice);
        filterArray = filterArray.filter(apartmentObj => {
            const price = apartmentObj.rentPrice;
            console.log(price);
            

            return (!minPrice || Number(price) >= Number(minPrice)) && (!maxPrice || Number(price) <= Number(maxPrice));

            


        
        });

    }
    if(minArea || maxArea){
        filterArray = filterArray.filter(apartmentObj => {
            const area = apartmentObj.floorArea;
            return (!minArea || Number(area) >= Number(minArea)) && (!maxArea || Number(area) <= Number(maxArea));
        });

    }

    console.log(filterArray);
 add(filterArray)

}

filterBtn.addEventListener('click',filterData);


inputArray.forEach(input =>{
    input.addEventListener('change', (e) => {
            let filterArray = flatsList;
            const searchValue = e.target;

         if(searchValue.checked === true && searchValue.value === 'A-Z') {
            filterArray = flatsList.sort((a,b) => a.city.localeCompare(b.city));
         }
         else if(searchValue.checked === true && searchValue.value === 'Z-A') {
            filterArray = flatsList.sort((a,b) => b.city.localeCompare(a.city));
         }
         else if(searchValue.checked === true && searchValue.value === 'Highest') {
            filterArray = flatsList.sort((a,b) => b.rentPrice -  a.rentPrice);
 
         }
         else if(searchValue.checked === true && searchValue.value === 'Lowest') {
             filterArray = flatsList.sort((a,b) => a.rentPrice -  b.rentPrice);
 
      
         }
         else if(searchValue.checked === true && searchValue.value === 'Max') {
            filterArray = flatsList.sort((a,b) => b.floorArea -  a.floorArea);
 
         }
         else if(searchValue.checked === true && searchValue.value === 'Min') {
            filterArray = flatsList.sort((a,b) => a.floorArea -  b.floorArea);
 
              
        }
        add(filterArray);
    })
     
 
 })

cards.classList.add('cards');
mainCard.appendChild(cards);



function add(dataArray){


    cards.innerHTML = '';
    
    dataArray.forEach(element => {
       
       
        const cardDiv = document.createElement('div');
        

        const flatNameSpan = document.createElement('span');
        const citySpan = document.createElement('span');
        const streetNameSpan = document.createElement('span');
        const streetNumberSpan = document.createElement('span');
        const floorAreaSpan = document.createElement('span');
        const ACSpan = document.createElement('span');
        const yearOfConstructionSpan = document.createElement('span');
        const rentPriceSpan = document.createElement('span');
        const availableDatesSpan = document.createElement('span');
  

        let flatNameValue = document.createElement('span');
        let cityValue = document.createElement('span');
        let streetNameValue = document.createElement('span');
        let streetNumberValue = document.createElement('span');
        let floorAreaValue = document.createElement('span');
        let ACValue = document.createElement('span');
        let yearOfConstructionValue = document.createElement('span');
        let rentPriceValue = document.createElement('span');
        let availableDatesValue = document.createElement('span');

        const flatNameKey = document.createElement('span');
        const cityKey = document.createElement('span');
        const streetNameKey = document.createElement('span');
        const streetNumberKey = document.createElement('span');
        const floorAreaKey = document.createElement('span');
        const ACKey = document.createElement('span');
        const yearOfConstructionKey = document.createElement('span');
        const rentPriceKey = document.createElement('span');
        const availableDatesKey = document.createElement('span');

        flatNameValue.innerText= element.flatName;
        cityValue.innerText= element.city;
        streetNameValue.innerText= element.streetName;
        streetNumberValue.innerText= element.streetNumber;
        floorAreaValue.innerText= element.floorArea;
        ACValue.innerText= element.AC;
        yearOfConstructionValue.innerText= element.yearOfConstruction;
        rentPriceValue.innerText= element.rentPrice;
        availableDatesValue.innerText= element.availableDates;

        flatNameKey.innerText= 'Flat Name :';
        cityKey.innerText= 'City:';
        streetNameKey.innerText= 'Street Name :';
        streetNumberKey.innerText= 'Street Number :';
        floorAreaKey.innerText= 'Floor Area :';
        ACKey.innerText= 'AC';
        yearOfConstructionKey.innerText= 'Year of construction :';
        rentPriceKey.innerText= 'Rent Price :';
        availableDatesKey.innerText= 'Available Dates';
   

       
       
        cardDiv.classList.add('flat_card');
        cardDiv.setAttribute('id', 'flats');

        flatNameSpan.classList.add('element');
        flatNameValue.setAttribute('id','flatName');


        floorAreaSpan.classList.add('element');
        citySpan.classList.add('element');
        streetNameSpan.classList.add('element');
        streetNumberSpan.classList.add('element');
        floorAreaSpan.classList.add('element');
        ACSpan.classList.add('element');
        yearOfConstructionSpan.classList.add('element');
        rentPriceSpan.classList.add('element');
        availableDatesSpan.classList.add('element');




        cards.appendChild(cardDiv);

        cardDiv.appendChild(flatNameSpan);   
        cardDiv.appendChild(citySpan);   
        cardDiv.appendChild(streetNameSpan);   
        cardDiv.appendChild(streetNumberSpan);   
        cardDiv.appendChild(floorAreaSpan);   
        cardDiv.appendChild(ACSpan);   
        cardDiv.appendChild(yearOfConstructionSpan);   
        cardDiv.appendChild(rentPriceSpan);   
        cardDiv.appendChild(availableDatesSpan);   

        flatNameSpan.appendChild(flatNameKey);
        flatNameSpan.appendChild(flatNameValue);

        citySpan.appendChild(cityKey);
        citySpan.appendChild(cityValue);

        streetNameSpan.appendChild(streetNameKey);
        streetNameSpan.appendChild(streetNameValue);

        streetNumberSpan.appendChild(streetNumberKey);
        streetNumberSpan.appendChild(streetNumberValue);

        floorAreaSpan.appendChild(floorAreaKey);
        floorAreaSpan.appendChild(floorAreaValue);

        ACSpan.appendChild(ACKey);
        ACSpan.appendChild(ACValue);

        yearOfConstructionSpan.appendChild(yearOfConstructionKey);
        yearOfConstructionSpan.appendChild(yearOfConstructionValue);

        rentPriceSpan.appendChild(rentPriceKey);
        rentPriceSpan.appendChild(rentPriceValue);

        availableDatesSpan.appendChild(availableDatesKey);
        availableDatesSpan.appendChild(availableDatesValue);


      
  

        const flatDetails = {
            flatName :flatNameValue.textContent,
            city : cityValue.textContent,
            streetName : streetNameValue.textContent,
            streetNumber : streetNumberValue.textContent,
            floorArea : Number(floorAreaValue.textContent),
            yearOfConstruction : Number(yearOfConstructionValue.textContent),
            rentPrice : Number(rentPriceValue.textContent),
            availableDates: availableDatesValue.textContent,
            AC : Boolean(ACValue.textContent),
            favorite: element.favorite
        }
       

        

        //   heart icon

        const iconSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        const iconPath = document.createElementNS(
          'http://www.w3.org/2000/svg',
          'path'
        );
                
        iconSvg.setAttribute('viewBox', '0 0 512 512');
        iconSvg.classList.add('heart_icon');
     
        iconPath.setAttribute(
            'd',
            "M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8l0-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5l0 3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20-.1-.1s0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5l0 3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2l0-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z"    );
            iconPath.setAttribute(
            'fill',
         "#dedfe8"    );
     
      
        iconSvg.appendChild(iconPath);
   
        cardDiv.appendChild(iconSvg);
        
        
        console.log(flatDetails);
      
        iconSvg.addEventListener('click',()=>{
            dataFromLS.forEach((user) =>  {
                if(user.email === loggedInUser.email){
                    user.userFlats.forEach(apartment =>{
                        if(apartment.flatName === flatDetails.flatName ){
                            apartment.favorite = !apartment.favorite;
                            console.log(apartment.favorite)
                        if(apartment.favorite === true){
                            iconPath.setAttribute(
                            'd',
                            "M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"    );

                            
                        }
                        else{
                            iconPath.setAttribute(
                            'd',
                            "M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8l0-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5l0 3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20-.1-.1s0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5l0 3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2l0-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z"    );
                            
                        }

                        }
                    })
                }
            })
            
            localStorage.setItem('registerUsers',JSON.stringify(dataFromLS));
        })


    });

    console.log(dataArray);
}
add(flatsList);


