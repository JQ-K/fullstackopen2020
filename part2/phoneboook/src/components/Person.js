import React from 'react'

const Person = ({ person, toggleDelete }) => {
    return (
    <div>
        {person.name} {person.number}
        <button onClick={toggleDelete} >delete</button>
    </div>
    )
}

export default Person