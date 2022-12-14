let weather = {
    'apiKey': '4a51a141780592ac0c960e32a1ed845c',
    fetchWeather: function(city){
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=" + this.apiKey
            ).then((Response) => Response.json())
            .then((data) => this.displayWeather(data))
    },
    displayWeather: function(data) {
        const { name } = data
        const { icon , description } = data.weather[0]
        const { temp, humidity } = data.main
        const { speed } = data.wind
        console.log(name, icon, description, temp, humidity, speed)
        document.querySelector('.city').innerText = "Weather in " + name
        document.querySelector('.icon').src = "https://openweathermap.org/img/wn/"+ icon + ".png"
        document.querySelector('.desc').innerText = description
        document.querySelector('.temp').innerText = temp + "°C"
        document.querySelector('.humidity').textContent = "Humidity: " + humidity + "%"
        document.querySelector('.wind').textContent = "Wind speed: " + speed + "km/h"
        document.body.style.backgroundImage = "url('https://source.unsplash.com/1920x1080/?" + name + "')"
    },
    search: function(){
        this.fetchWeather(document.querySelector('.search-bar').value)
    }
}
document.querySelector('.search button').addEventListener('click', function(){
    weather.search()
})
document.querySelector('.search-bar').addEventListener('keyup', function(event){
    if(event.key === 'Enter'){
        weather.search()
    }
})
weather.fetchWeather('New York')