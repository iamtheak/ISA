//All the variables from DOM
const weather_overview = document.querySelector(".weather-overview");
const weather_icon = document.querySelector(".weather-icon");
const temperature = document.querySelector(".temperature");
const humidity =  document.querySelector(".humidity");
const windspeed =  document.querySelector(".windspeed");
const rainfall = document.querySelector(".rainfall");
const submit = document.querySelector("#submit");
const searchbar = document.querySelector("#searchbar");
const timeDisplay = document.querySelector(".time");
const city = document.querySelector(".city")
// All the month and day variables for the clock
const allMonth = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const allDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];


//The clock function

function theClock(){
    //Creating the time object
    let time = new Date()
    let day = allDays[time.getDay()]
    let month = allMonth[time.getMonth()]
    let year = time.getFullYear()
    let date = time.getDate()
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    let meridian = 'AM'
    //Storing all the ids in one array
    let ids = ["day","month","date","year","hour","min","sec","me"];

    //Setting if the hours turns to 0 or midnight it shows 12
    if(hours == 0) {
         hours = 12; 
        } 
    //Setting if the hours is more than 12 it will show 1
    if (hours > 12) { 
        hours =  hours - 12; 
    }
    //Setting the variable in the corresponding order
    let daydate = [day,month,date,year,hours+":",minutes+":",seconds,meridian]
    //Applying it to the DOM
    for(let i = 0;i <ids.length;i++){
        document.getElementById(ids[i]).textContent = daydate[i]
    }
}
//Updating the clock ever 1s
setInterval(theClock,1000)

//The weather function to run the weather app
function getWeather(cityname){
    //fetching the api promise
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&units=metric&appid=9c8d6178332aa2f80627839ef3688aa0`)
    .then(res => res.json())
    .then((data) =>{

            /* 
                To show what shows what
                data.name = cityname
                data.wind.speed = windspeed
                data.wind.deg = wind degree
                data.weather[0].description = Weather overview
                data.weather[0].icon = get the weather icon
                data.main.temp = The actual temperature
                data.main.feels_like = The feels like temperature
                data.main.temp_max = Max temperature 
                data.main.temp_max = Min temperature 
                data.main.humidity = The humidity

            */

        //getting the wind degree and setting the direction accordingly
        let degree = data.wind.deg
        let dir = 'N'
        if (degree >= 348.75 || degree <= 11.25) {
            dir = 'N'
        } else if (degree > 11.25 && degree <= 33.75) {
            dir = 'NNE'
        } else if (degree > 33.75 && degree <= 56.25) {
            dir = 'NE'
        } else if (degree > 56.25 && degree <= 78.75) {
            dir = 'ENE'
        } else if (degree > 78.75 && degree <= 101.25) {
            dir ='E'
        } else if (degree > 101.25 && degree <= 123.75) {
            dir ='ESE'
        } else if (degree > 123.75 && degree <= 146.25) {
            dir ='SE'
        } else if (degree > 146.25 && degree <= 168.75) {
            dir ='SSE'
        } else if (degree > 168.75 && degree <= 191.25) {
            dir = 'S'
        } else if (degree > 191.25 && degree <= 213.75) {
            dir ='SSW'
        } else if (degree > 213.75 && degree <= 236.25) {
            dir ='SW'
        } else if (degree > 236.25 && degree <= 258.75) {
            dir = 'WSW'
        } else if (degree > 258.75 && degree <= 281.25) {
            dir ='W'
        } else if (degree > 281.25 && degree <= 303.75) {
            dir ='WNW'
        } else if (degree > 303.75 && degree <= 326.25) {
            dir ='NW'
        } else if (degree > 326.25 && degree < 348.75) {
            dir ='NNW'
        }

        //Displaying in the dom 
        city.innerHTML = "Weather of "+ data.name
        //Setting the background image of the body with the city
        document.body.style.backgroundImage = `URL("https://source.unsplash.com/1600x900/?${data.name}")`

        weather_overview.innerHTML =  `${data.weather[0].description}`
        weather_icon.innerHTML = " "

        let img = document.createElement('img')
        img.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
        weather_icon.appendChild(img)

        let allTemp = document.createElement('p');
        let span = document.createElement('span')
        span.classList.add('temp')

        let tempData = document.createTextNode(`Temp: ${data.main.temp}ºC`)
        let otherTemp = document.createTextNode(` Feels like: ${data.main.feels_like}ºC Max: ${data.main.temp_max}ºC Min: ${data.main.temp_min}ºC`)
        temperature.innerHTML = ""
        span.appendChild(tempData)
        allTemp.appendChild(span)
        allTemp.appendChild(document.createElement('br'))
        allTemp.appendChild(document.createElement('br'))
        allTemp.appendChild(otherTemp)
        temperature.appendChild(allTemp)

        humidity.innerHTML = `Humidity : ${data.main.humidity}%`
        windspeed.innerHTML = `Wind speed : ${data.wind.speed}m/s Degree : ${degree}º ${dir}`

    })
    .catch(error => {
        alert("The city is not found")
    })
}

getWeather("Albuquerque")

let search = ()=>{
    let val = searchbar.value
    getWeather(val)
    searchbar.value = " "
}

submit.addEventListener('click',(element)=>{
    element.preventDefault()
    search()
})

