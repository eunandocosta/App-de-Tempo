import React, { useState} from 'react';

function Main() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState({});

  const searchPressed = () => {
    try{
    fetch(`${api.base}weather?q=${city}&units=metric&APPID=${api.key}`)
    .then((res)=>res.json())
    .then(async result => {
      await setWeather(result)
    })}
    catch(error){
      console.log(error)
    }
  }
  console.log(weather)

  const api = {
    key: 'f6926d4bad0f6c582cd7e989771abc70',
    base: 'https://api.openweathermap.org/data/2.5/'}

  return (
    <>
      <div className="App">
        <div className="container">
          <div className='glassBG'>
            <h1>Weather App</h1>
            <div className='find'>
              <input 
              type="text" 
              placeholder="Nome da cidade..." 
              onBlur={(e)=>setCity(e.target.value)}/>
              <button className='search' onClick={searchPressed}>Procurar</button>
            </div>
            {weather && weather.name && weather.main && weather.weather &&(
              <div className='result'>
                <p>{weather.name}</p>
                <p>{weather.main.temp}º C</p>
                <p>{weather.weather[0].main}</p>
                <p>({weather.weather[0].description})</p>
              </div>
            )}
          </div>
        </div>
      </div>
      </>
    );
  }


export default Main;
