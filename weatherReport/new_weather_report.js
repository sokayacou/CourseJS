function showweatherDetails(event) {
    event.preventDefault();
    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        const weatherInfos = document.getElementById('weatherInfos');
        weatherInfos.innerHTML = `<h2>Weather in ${data.name}</h2>
                                  <p>Temperature: ${data.main.temp} &#8451;</p>
                                  <p>Weather: ${data.weather[0].description} &#8451;</p>
                                  <p>Code : ${data.cod} &#8451;</p>
                                  <p>Id : ${data.id} &#8451;</p>
                                  <p>Rain : ${data.rain}</p>`
    })
    .catch(error => {
          console.error('Error fetching weather:', error);
          const weatherInfos = document.getElementById('weatherInfos');
          weatherInfos.innerHTML = `<p>Failed to fetch weather. Please try again.</p>`;
        });

}

const longitude = document.getElementById('long').value;
const latitude = document.getElementById('lati').value;
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}';
const apiKey = 'YOU_API_KEY';

document.getElementById('weatherForm').addEventListener('submit',showweatherDetails );
