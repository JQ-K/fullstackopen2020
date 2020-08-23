import React, { useState, useEffect } from 'react'
import axios from 'axios' 
import Note from './components/Note'
import noteService from './services/notes'


const App = (props)=> {
    // const [notes, setNotes] = useState(props.notes)
    const [notes, setNotes] = useState([])
    const [newNote, setNewNote] = useState(
        'a new note...'
    )
    const [showAll, setShowAll] = useState(true)

    const toggleImportanceOf = (id) => {
        console.log('importance of ' + id + ' needs to be toggled')
        const url = `http://localhost:3005/notes/${id}`
        const note = notes.find(n => n.id === id)
        // 取反
        const changeNote = {...note, important: !note.important }
        
        // 使用put请求方式更新
        // Map 方法通过将旧数组中的每个项映射到新数组中的一个项来创建一个新数组。 在我们的示例中，新数组被有条件地创建，即如果note.id !== id为true，我们只需将项从旧数组复制到新数组中。 如果条件为 false，则将服务器返回的 note 对象添加到数组中。
        axios.put(url, changeNote).then(response => {
            setNotes(notes.map(note => note.id !== id ? note: response.data))
        })
      }

    const hook = () => {
        console.log('effect')
        axios
          .get('http://localhost:3005/notes')
          .then(response => {
              console.log('promise fulfilled')
              setNotes(response.data)
          })   
    }
    useEffect(hook, [])
    console.log('render', notes.length,'notes')
    

    const addNote = (event) => {
        event.preventDefault()
        // console.log('button clicked', event.target)
        const noteObject = {
            content: newNote,
            date: new Date().toISOString(),
            important: Math.random() > 0.5,
            // id: notes.length + 1,
        }
        
        // setNotes(notes.concat(noteObject))
        // setNewNote('')
        
        // post 新增数据
        //concat 方法不会改变组件的原始状态，而是创建列表的新副本
        axios
            .post('http://localhost:3005/notes', noteObject)
            .then(response => {
                console.log(response)
                setNotes(notes.concat(noteObject))
                setNewNote('')
            })
    }
    

    const handleNoteChange = (event) => {
        console.log(event.target.value)
        setNewNote(event.target.value)
    }
    
    const notesToShow = showAll 
        ? notes 
        // : notes.filter(note => note.important === true)
        : notes.filter(note => note.important)

    return (
        <div>
            <h1>Notes</h1>
            <div>
                <button onClick={() => setShowAll(!showAll)}>
                    show {showAll ? 'important' : 'all'}
                </button>
            </div>
            <ul>
                {notesToShow.map((note) =>
                <Note 
                    key={note.id} 
                    note={note}
                    toggleImportance={() => toggleImportanceOf(note.id)}
                />
                )}
            </ul>
            <form onSubmit={addNote}>
                <input 
                value={newNote} 
                onChange={handleNoteChange}
                />
                <button type="submit">save</button>
            </form>
        </div>
    )

}


export default App