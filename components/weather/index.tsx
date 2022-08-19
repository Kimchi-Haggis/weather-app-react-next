import { CURRENT_WEATHER } from '@constants/weather.constant';
import axios from 'axios'
import React, { useState } from 'react'

interface Main {
  temp: number;
  feels_like: number;
  humidity: number;
}
  
interface Weather {
  0: any;
}
interface Wind {
  speed: number;
}

interface DataType {
  name: string;
  main: Main;
  weather: Weather;
  wind: Wind;
}

const Weather = () => {
  const [data, setData] = useState({} as DataType)
  const [location, setLocation] = useState('')

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=${CURRENT_WEATHER}`
  
  const searchLocation = async (e: { key: string }) => {

    try {
      if (e.key === 'Enter') {
        const res = await axios.get(url);
        setData(res.data);
      }
    } catch (error) {
      alert("No location found")
    }
  }
  
  const fahrenheitTemp = () => data.main.temp.toFixed();
  const fahrenheitFeelsLike = () => data.main.feels_like.toFixed()

  function toCelsius(f:string) {
    const num = parseInt(f)
    const toCelsius = (5/9) * (num-32)
    
    return toCelsius.toFixed(1);
  }

  return (
    <div className="bg-grain02 box-section h-screen ">
      <div className='box-contents'>
        <div className="box-item-head text-black">
          <input
            className='box-border text-center'
            value={location}
            onChange={e => setLocation(e.target.value)}
            onKeyPress={searchLocation}
            placeholder='Enter Location'
            type="text"
          />
        </div>

        <div className="box-item text-BW">
          <div className="box-item-head">
            <div>
              <p>{data.name}</p>
            </div>
            <div>
              {data.main ? <h1>{fahrenheitTemp()}°F / {toCelsius(fahrenheitTemp())}°C</h1> : null}
            </div>
            <div>
              {data.weather ? <p>{data.weather[0].main}</p> : null}
            </div>
          </div>

          {data.name !== undefined &&
            <div className="box-item-col3 ">
              <div className="flex justify-center">
                <div>
                  {data.main ? <p className='bold'>{fahrenheitFeelsLike()}°F / {toCelsius(fahrenheitFeelsLike())}°C</p> : null}
                  <p>Feels Like</p>
                </div>
              </div>
              <div className="flex justify-center">
                <div>
                  {data.main ? <p className='bold'>{data.main.humidity}%</p> : null}
                  <p>Humidity</p>
                </div>
              </div>
              <div className="flex justify-center">
                <div>
                  {data.wind ? <p className='bold'>{data.wind.speed.toFixed()} MPH</p> : null}
                  <p>Wind Speed</p>
                </div>
              </div>
            </div>
          }
        </div>
      </div>
    </div>
  )
}

export default Weather;