import React, { useState, useEffect } from 'react'
import Person from './components/Person'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import phonebookService from './services/phonebook'
import Notification from './components/Notification'
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
    const [notification, setNotification] = useState(null)
    const [errorMessage, setErrorMessage] = useState(null)
    const [message, setMessage] = useState(null)



    // const hook = () => {
    //   console.log('effect')
      
    //   axios
    //     .get('http://localhost:3001/persons')
    //     .then(response =>{
    //       setPersons(response.data)
    //     })
    // }
    // useEffect(hook, [])


    useEffect(() => {
      phonebookService
          .getAll()
          .then(initialPhonebook => {
            setPersons(initialPhonebook)
          })
    }, [])

    // 处理删除人员信息的逻辑
    // delete 操作
    const toggleDeleteOf = id => {
      const savePersons = persons.filter(n => n.id !== id)
      phonebookService
        .del(id)
        .then(response =>{
          setPersons(savePersons)
        })
    }

    


    const addPerson =(event) => {
        event.preventDefault()
        console.log('button clicked', event.target)

        const nameList = persons.map((item) => item.name)
        console.log('name', nameList)

        if (nameList.indexOf(newName) !==-1) {
            const idIndex = nameList.indexOf(newName)
            const oldPerson = persons[idIndex]
            

            // const r = window.confirm(`${newName} is already added to phonebook`)
            // if (r){
              const personObject = {
                name: newName,
                number: newNumber,
              }

              phonebookService
              // .update(oldPerson.id, personObject)
              .update(oldPerson.id, {...oldPerson, number: newNumber})

                .then(returnData => {
                  console.log('returndata', returnData)
                  // setPersons(persons.concat(returnData))
                  setPersons(
                    persons.map(n => (n.name === newName ? returnData : n))
                    )
              })

              // setMessage(
              //   `Added ${newName}`
              // )
              // setTimeout(() => {
              //   setMessage(null)
              // }, 5000)


              .catch(error => {
                  setErrorMessage(
                    `Information of ${newName} was already removed from server` 
                )
                setTimeout(() => {
                    setErrorMessage(null)
                }, 5000)

             

                // 过滤 如果发生错误说明 服务器json没有这条数据，不要显示
                // setPersons(persons.filter(n => n.id !== oldPerson.id))
              })

            // }
        } else {
            const personObject = {
                name: newName,
                number: newNumber,
            }
            // axios
            //   .post('http://localhost:3001/persons',personObject)
            //   .then(response => {
            //     setPersons(persons.concat(personObject))
            //   })

            phonebookService
              .create(personObject)
              .then(returnData => {
                setPersons(persons.concat(returnData))
                // setNotification(alert(`Added  ${personObject.name}`))
                setMessage(`Added ${personObject.name}`)
                setTimeout(() => {
                  setMessage(null)
                }, 5000)

              })
              // .then(`Added  ${personObject.name}`)
            // promise.then(() => {
            //   setNotification(notify(`Added ${newName}`, false))
            //   // setTimeout(() => clearNotification(), 3000)
            // })

              // .catch(error =>{
              //   setNotification(`Added  ${personObject.name}`)
              //   setTimeout(() => {
              //     setNotification(null)
              // }, 5000)
              // })


            // setPersons(persons.concat(personObject))
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
        <Notification message={message} />
        <Notification message={errorMessage}/>
        {/* setTimeout(() => setTellFlashMessage(null), 5000) */}

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
            {filterItems.map((person) => 
                <Person 
                 key={person.id}
                 person={person}
                 toggleDelete ={() => toggleDeleteOf(person.id)}
                />
            )}
        </div>
      </div>
    )
  }
  
  export default App
