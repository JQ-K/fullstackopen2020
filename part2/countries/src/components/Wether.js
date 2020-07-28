import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Wether = ({capital}) => {
    const [ wether, setWheter ] = useState([])

    const hook = () => {
      
      const wetherUrl = 'http://api.weatherstack.com/current?access_key='
                        + process.env.REACT_APP_API_KEY  + '&query=' + capital
      axios
        .get(wetherUrl)
        .then(response =>{
            setWheter(response.data)
        })
    }
    useEffect(hook,[])
    console.log('wether_effect', wether)

    const wetherInfo = wether.current
    if (wether === undefined | wether.length===0) {
        return <p>Loading...</p>
    } else {
        console.log('kkk', wetherInfo.temperature);
        return (
            <form>
                <h2>Weather  in {capital} </h2>
                <b>temperature</b>: {wether.current.temperature} 
                <div>
                    <img src={wether.current.weather_icons[0]}/>
                </div>
                <b>wind:</b> {wether.current.wind_speed} mph direction {wether.current.wind_dir}
            </form>
       )
    }


}



export default Wether