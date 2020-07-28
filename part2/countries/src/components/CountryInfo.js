import React from 'react'


const CountryInfo = ({ country }) => {
    return (
        <div>
                <h1>{country.name}</h1>
                <div>capital {country.capital}</div>
                <div>population {country.population}</div>
                <h2>Languages</h2>
                <ul>
                    {country.languages.map((language) => 
                            <li key={language.name}>{language.name} </li>
                        )}
                </ul>
                <div>
                    <img src={country.flag} width="100" height="100" />
                </div>
            </div>
    )
}

export default CountryInfo