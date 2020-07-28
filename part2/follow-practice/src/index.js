import React from 'react'
import ReactDOM from 'react-dom'
import axios from  'axios'
import Note from './components/Note'
import App from './App'

// const promise = axios.get('http://localhost:3001/notes')

// promise.then(response => {
//   console.log(response)
  
// })

// axios
//   .get('http://localhost:3001/notes')
//   .then(response => {
//     const notes = response.data
//     ReactDOM.render(
//       <App notes={notes} />,
//       document.getElementById('root')
//     )
//     console.log(notes)
//   })



const notes = [
  {
    id: 1,
    content: 'HTML is easy',
    date: '2019-05-30T17:30:31.098Z',
    important: true
  },
  {
    id: 2,
    content: 'Browser can execute only Javascript',
    date: '2019-05-30T18:39:34.091Z',
    important: false
  },
  {
    id: 3,
    content: 'GET and POST are the most important methods of HTTP protocol',
    date: '2019-05-30T19:20:14.298Z',
    important: true
  }
]

// const Note = ({ note }) => {
//   return (
//     <li>{note.content}</li>
//   )
// }

// const App = ({notes}) => {

//   return (
//     <div>
//       <h1>Notes</h1>
//       <ul>
//       {notes.map(note =>
//           <Note key={note.id} note ={note}/>
//       )}

//         {/* {notes.map((note)=>{
//           return(
//           <li>{note.content}</li>)
//         })} */}

//         {/* {notes.map(note =>
//           <li key={note.id}>
//             {note.content}
//           </li>
//           )} */}
        
//       </ul>
//     </div>
//   )
// }

ReactDOM.render(
  // <App notes={notes} />,
  <App />,
  document.getElementById('root')
)




/*
map 后的一个参数 i 是index 索引
<ul>
  {notes.map((note, i) => 
    <li key={i}>
      {note.content}
    </li>
  )}
</ul>
*/ 