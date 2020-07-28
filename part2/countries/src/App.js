import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Country from './components/Country'


const App = () => {

    const [ filterWord, setFilterWord ] = useState('')
    const [ countries, setCountries ] = useState([])

    const hook = () => {
      axios
        .get('https://restcountries.eu/rest/v2/all')
        .then(response =>{
            setCountries(response.data)
        })
    }
    useEffect(hook, [])



    const handleFilterChange = (event) => {
        console.log(event.target.value)
        setFilterWord(event.target.value)
    }

    var isWordInName = function(person) {
        var name = person.name.toLowerCase()
        return name.indexOf(filterWord.toLowerCase()) !== -1
    }

    const filterItems = countries.filter(isWordInName)
    console.log('cc',filterItems)

  
    return (
        <div>
            find countries<input 
                        value={ filterWord }
                        onChange={handleFilterChange}
                      />
            <div>
                {/* { 
                filterItems.map((country) => 
                     <div key={country.name}>{country.name}</div>
                )} */}
            </div>
            <div>
                <Country countries={filterItems}/> 
            </div>
        </div>
    )
  }
  
  export default App
