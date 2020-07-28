import React, { useState, useEffect } from 'react'
import Person from './components/Person'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import axios from 'axios'


const App = () => {
    // const [ persons, setPersons ] = useState([
    //   { name: 'Arto Hellas', number: '040-1234567' },
    //   { name: 'Ada Lovelace', number: '39-44-5323523' },
    //   { name: 'Dan Abramov', number: '12-43-234345' },
    //   { name: 'Mary Poppendieck', number: '39-23-6423122' }
    // ]) 
    const [ persons, setPersons ] = useState([])

    const [ newName, setNewName ] = useState('')
    const [ newNumber, setNewNumber ] = useState('')
    const [ filterWord, setFilterWord ] = useState('')

    const hook = () => {
      console.log('effect')
      
      axios
        .get('http://localhost:3001/persons')
        .then(response =>{
          setPersons(response.data)
        })
    }
    useEffect(hook, [])


    const addPerson =(event) => {
        event.preventDefault()
        console.log('button clicked', event.target)

        const nameList = persons.map((item) => item.name)
        console.log('name', nameList)

        if (nameList.indexOf(newName) !==-1) {
            console.log('exitst')
            window.alert(`${newName} is already added to phonebook`
            )
        } else {
            const personObject = {
                name: newName,
                number: newNumber,
            }
            setPersons(persons.concat(personObject))
        }
        setNewName('')
        setNewNumber('')
        // const personObject = {
        //     name: newName,
        // }
        // setPersons(persons.concat(personObject))
        // setNewName('')
    }

    const handleNameChange = (event) => {
        console.log(event.target.value)
        setNewName(event.target.value)
    }

    const handleNumberChange = (event) => {
        console.log(event.target.value)
        setNewNumber(event.target.value)
    }

    const handleFilterChange = (event) => {
        console.log(event.target.value)
        setFilterWord(event.target.value)
    }

    var isWordInName = function(person) {
        var name = person.name.toLowerCase()
        return name.indexOf(filterWord.toLowerCase()) !== -1
    }

    const filterItems = persons.filter(isWordInName)

  
    return (
      <div>
        <h2>Phonebook</h2>
        {/* <div>
            filter shown with <input 
                              value={filterWord}
                              onChange={handleFilterChange}
                            />
        </div> */}
        <Filter filterWord={filterWord} handleFilterChange={handleFilterChange}  />
        <h2>add a new</h2>
        {/* <form onSubmit={addPerson}>
          <div>
            name: <input
                  value={newName}
                  onChange={handleNameChange}
                 />
          </div>
          <div>
              number: <input 
                      value={newNumber}
                      onChange={handleNumberChange}
                    />
          </div>
          <div>
            <button type="submit">add</button>
          </div>
        </form> */}
        <PersonForm addPerson={addPerson} 
                    newName={newName}
                    newNumber={newNumber}
                    handleNumberChange={handleNumberChange}
                    handleNameChange={handleNameChange}
                    />
        <h2>Numbers</h2>
        <div>
            {/* {persons.map((person) =>  */}
            {filterItems.map((person) => 
                <Person key={person.name} person={person}/>
            )}
        </div>
      </div>
    )
  }
  
  export default App
