import type { NextPage } from 'next'
import axios from 'axios'
import React, { useState } from 'react'
import { CURRENT_WEATHER } from '../constants/weather.constant';

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

const Home: NextPage = () => {
  const [data, setData] = useState<DataType>({})
  const [location, setLocation] = useState('')

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=${CURRENT_WEATHER}`

  const searchLocation = (e: { key: string }) => {
    if (e.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
        // console.log(typeof data.weather.main);
        
      })
      setLocation('')
    }
  }
  return (
    <div className="app">
      <div className="search">
        <input
          value={location}
          onChange={e => setLocation(e.target.value)}
          onKeyPress={searchLocation}
          placeholder='Enter Location'
          type="text" />
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            {data.main ? <h1>{data.main.temp.toFixed()}°F</h1> : null}
          </div>
          <div className="description">
            {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>
        </div>

        {data.name !== undefined &&
          <div className="bottom">
            <div className="feels">
              {data.main ? <p className='bold'>{data.main.feels_like.toFixed()}°F</p> : null}
              <p>Feels Like</p>
            </div>
            <div className="humidity">
              {data.main ? <p className='bold'>{data.main.humidity}%</p> : null}
              <p>Humidity</p>
            </div>
            <div className="wind">
              {data.wind ? <p className='bold'>{data.wind.speed.toFixed()} MPH</p> : null}
              <p>Wind Speed</p>
            </div>
          </div>
        }
      </div>
    </div>
  )
}

export default Home
