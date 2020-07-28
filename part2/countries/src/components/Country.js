import React from 'react'
import  CountryInfo from  './CountryInfo'
import Wether from './Wether'


const Button = ({ handleClick,text }) => (
    <button onClick={handleClick}>
        {text}
    </button>
)

const Country = ({ countries }) => {
    // var countryLenth = countries.length()

    const handleClick = () => {
        console.log('clicked')
      }

    if (countries.length > 10) {
        return(
            <div>Too many countries, specify another filter</div>
        )
    } else if (countries.length===1) {
        // <CountryInfo country={countries[0]}/>
        const capital = countries[0].capital
        return(
            <div>
                <CountryInfo country={countries[0]}/>
                <Wether capital={capital}/>
            </div>
           
            // <div>
            //     <h1>{countries[0].name}</h1>
            //     <div>capital {countries[0].capital}</div>
            //     <div>populaton {countries[0].populaton}</div>
            //     <h2>Languages</h2>
            //     <ul>
            //         {countries[0].languages.map((language) => 
            //                 <li key={language.name}>{language.name} </li>
            //             )}
            //     </ul>
            //     <div>
            //         <img src={countries[0].flag} width="100" height="100" />
            //     </div>
            // </div>
        )

    } else  {
        return (
            <div>
            { 
            countries.map((country) => 
                 <div key={country.name}>
                     {country.name}
                     <button >
                         show
                     </button>
                 </div>
            )}
        </div>
            )
    }

    
}

export default Country