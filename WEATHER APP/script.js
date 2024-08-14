// //weatherapi.com was used for the api under trial which ends on 27 Aug 2024

// //  http://api.weatherapi.com/v1/current.json?key=a14793b561564d21a14214454241308&q=Johannesburg&aqi=no
// // location, time, date, tempreture, weathercondition, day

// const Tempreturefield= document.querySelector(".tempreture")
// const Locationfield= document.querySelector(".time_location p")
// const DateandTimefield= document.querySelector(".time_location span")
// const Weatherfield= document.querySelector(".weather_icon p")
// const Searchfield= document.querySelector(".search_city")
// //const Searchbutton= document.querySelector(".search_button")
// const form = document.querySelector("form");

// form.addEventListener('submit', SearchForLocation )


// let Citylocation = 'Johannesburg';

// const fetchResults = async (Citylocation) => {
//     let url = `http://api.weatherapi.com/v1/current.json?key=a14793b561564d21a14214454241308&q=${Citylocation}&aqi=no`;

//     const response = await fetch(url);

//     const data = await response.json();

//     console.log(data);

//     let LocationName = data.location.name;

//     let time = data.location.localtime;
   
//     let tempreture = data.current.temp_c;
  
//     let condition  = data.current.condition.text; 

//     //Locationfield.textContent = LocationName;
//     // Datefield.textContent = time;
//     // Tempreturefield.textContent = `${tempreture}°C`;
//     // Weatherfield.textContent = condition;

//     updateDetails(tempreture,LocationName,time, condition)

// };

// function updateDetails(tempreture, LocationName, time, condition){

//     let splitDate= time.split(' ')[0];
//     let splitTime= time.split(' ')[1];

//     let currentDay = getDayName(new Date(splitDate).getDay())

//     Tempreturefield.innerText = tempreture;
//     Locationfield.innerText= LocationName;
//     DateandTimefield.innerText = '${splitDate} ${currentDay} ${splitTime}';
//     Weatherfield.innerText = condition;
 

// }

// function SearchForLocation(e){
//     e.preventDefalut();

//     let target = Searchfield.value
//     fetchResults(target);

// }

// function getDayName(number){
//     switch(number){
//         case 0: 
//         return "Sunday";

//         case 1: 
//         return "Monday";

//         case 2: 
//         return "Tuesday";

//         case 3: 
//         return "Wednesday";

//         case 4: 
//         return "Thursday";

//         case 5: 
//         return "Friday";

//         case 6: 
//         return "Saturday";

//     }

// }




// fetchResults(Citylocation)





const Tempreturefield = document.querySelector(".tempreture");
const Locationfield = document.querySelector(".time_location p");
const DateandTimefield = document.querySelector(".time_location span");
const Weatherfield = document.querySelector(".weather_icon p");
const Searchfield = document.querySelector(".search_city");
const form = document.querySelector("form");

form.addEventListener('submit', SearchForLocation);

let Citylocation = 'Johannesburg';

const fetchResults = async (Citylocation) => {
    let url = `http://api.weatherapi.com/v1/current.json?key=a14793b561564d21a14214454241308&q=${Citylocation}&aqi=no`;

    const response = await fetch(url);
    const data = await response.json();

    console.log(data);

    let LocationName = data.location.name;
    let time = data.location.localtime;
    let tempreture = data.current.temp_c;
    let condition = data.current.condition.text;

    updateDetails(tempreture, LocationName, time, condition);
};

function updateDetails(tempreture, LocationName, time, condition) {
    let splitDate = time.split(' ')[0];
    let splitTime = time.split(' ')[1];

    let currentDay = getDayName(new Date(splitDate).getDay());

    Tempreturefield.innerText = tempreture;
    Locationfield.innerText = LocationName;
    DateandTimefield.innerText = `${splitDate} ${currentDay} ${splitTime}`;
    Weatherfield.innerText = condition;
}

function SearchForLocation(e) {
    e.preventDefault(); // Correct the typo here

    let target = Searchfield.value;
    fetchResults(target);
}

function getDayName(number) {
    switch (number) {
        case 0:
            return "Sunday";
        case 1:
            return "Monday";
        case 2:
            return "Tuesday";
        case 3:
            return "Wednesday";
        case 4:
            return "Thursday";
        case 5:
            return "Friday";
        case 6:
            return "Saturday";
    }
}

fetchResults(Citylocation);

