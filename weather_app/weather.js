import readline from 'readline/promises';

    const API_KEY ='your key';
   const  BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    const getWeather = async (city)=>
{    
    const url =`${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`;
    try {
        const response = await fetch(url);
        if(!response.ok){
            throw new Error("city was not found . Please enter city name. ") ;    
        }
        const weatherData = await response.json(); 

    console.log('\nweather Information:');
    console.log(`City: ${weatherData.name}`);
    console.log(`Temperature: ${weatherData.main.temp}°C`);
    console.log(`Description: ${weatherData.weather[0].description}`);
    console.log(`pressure: ${weatherData.main.pressure}`);
    console.log(`Humidity: ${weatherData.main.humidity}%`);
    console.log(`Wind Speed: ${weatherData.wind.speed} m/s\n`);    
    } catch (error) {
        console.log(error);
        
    }

}  
  const city =  await rl.question('enter city name to get its weather ');
    await getWeather(city);
    rl.close();
