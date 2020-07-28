import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import App from './App'

// const Course = ({ course }) => {
//     const parts = course.parts
//     const total = parts.reduce((sum, part) => sum + part.exercises, 0)
//     return (
//         <div>
//             <Header course= {course}/>
//             <div>
//                 {parts.map(part =>
//                     <Content key={part.id} part={part}/>
//                 )}
//             </div>
//             <div>
//                 {/* {parts.reduce((sum, part) => sum + part.exercises, 0)} */}
//                 total of {total} exercises
//             </div>
//         </div>
//     )
// }

// const Header = ({ course }) =>{
//     return(
//     <h1>{course.name}</h1>
//     )

// }

// const Content =({ part }) => {
//     return(
//     <div>{part.name} {part.exercises}</div>
//     )

// }


// const App = () => {
//     const courses = [
//         {
//           name: 'Half Stack application development',
//           id: 1,
//           parts: [
//             {
//               name: 'Fundamentals of React',
//               exercises: 10,
//               id: 1
//             },
//             {
//               name: 'Using props to pass data',
//               exercises: 7,
//               id: 2
//             },
//             {
//               name: 'State of a component',
//               exercises: 14,
//               id: 3
//             },
//             {
//               name: 'Redux',
//               exercises: 11,
//               id: 4
//             }
//           ]
//         }, 
//         {
//           name: 'Node.js',
//           id: 2,
//           parts: [
//             {
//               name: 'Routing',
//               exercises: 3,
//               id: 1
//             },
//             {
//               name: 'Middlewares',
//               exercises: 7,
//               id: 2
//             }
//           ]
//         }
//       ]
  
  
//     //   return <Course course={course} />
//       return (
//           <div>
//               {courses.map(course => 
//                  <Course  key = {course.id} course={course} />
//                 )}
//           </div>
//       )

   
//   }


const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

ReactDOM.render(
    <App courses ={courses} />,
    document.getElementById('root'))