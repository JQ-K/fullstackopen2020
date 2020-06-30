import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const App = (props) => {
    const [selected, setSelected] = useState(0)

    const points = Array.apply(null, new Array(props.anecdotes.length)).map(Number.prototype.valueOf,0)
    const [allPoints, setAllPoints] = useState(points)
    console.log('allpoint', allPoints)
    

    const voteForAnecdote = () => {
        const copy = [...allPoints]
        copy[selected] += 1
        setAllPoints(copy)  
    }
    
    const randomAnecdote = () => {
        setSelected(Math.floor(Math.random()*props.anecdotes.length))
    }

    const mostVote = Math.max.apply(Math,allPoints)

    //最大值的index
    const mostVoteIndex = allPoints.indexOf(Math.max.apply(Math,allPoints))


    return (
        <div>
            <h1>Anecdote of the day</h1>
            <div>{props.anecdotes[selected]}</div>
            <div>has {allPoints[selected]} votes</div>
            <button onClick={voteForAnecdote}>
                vote
            </button> 
            <button onClick={randomAnecdote}>
                next anecdote
            </button>

            <h1>Anecdote with most votes</h1>
            <div>
                {props.anecdotes[mostVoteIndex]}
                <br></br>
                has {mostVote} votes
            </div>
        </div>
    )
}



const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]

ReactDOM.render(
    <App anecdotes={anecdotes}/>,
    document.getElementById('root'))