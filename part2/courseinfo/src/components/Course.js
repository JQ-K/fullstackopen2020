import React from 'react'


const Course = ({ course }) => {
    const parts = course.parts
    const total = parts.reduce((sum, part) => sum + part.exercises, 0)
    return (
        <div>
            <Header course= {course}/>
            <div>
                {parts.map(part =>
                    <Content key={part.id} part={part}/>
                )}
            </div>
            <div>
                total of {total} exercises
            </div>
        </div>
    )
}

const Header = ({ course }) =>{
    return(
    <h1>{course.name}</h1>
    )

}

const Content =({ part }) => {
    return(
    <div>{part.name} {part.exercises}</div>
    )

}

export default Course