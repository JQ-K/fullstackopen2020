import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const Button = ({ handleClick,text }) => (
    <button onClick={handleClick}>
        {text}
    </button>
)


const Statistic = ({text, value}) => {
    return (
        <table>
            <tr>
                <th align='left'>{text}</th>
                <th align='left'>{value}</th>
            </tr>
        </table>
    )
}

const Statistics = (props) => {
    const good = props.good
    const neutral = props.neutral
    const bad = props.bad
    

    if (good === 0 && neutral ===0 && bad===0){
        return (
            <div>
                <h1>statistics</h1>
                No feedback given
            </div>
        )
    }

    return (
        <div>
            <h1>statistics</h1>
            <Statistic text='good' value={good}/>
            <Statistic text='neutral' value={neutral}/>
            <Statistic text='bad' value={bad}/>
            <Statistic text='all' value={good + neutral + bad}/>
            <Statistic text='average' value={(good-bad)/(good + neutral + bad)}/>
            <Statistic text='positive' value={good/( good + neutral + bad) * 100 +'%'}/>
        </div>
        )
    }


const App = (props) => {
    const [good,setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    const [selected, setSelected] = useState(0)

    return (
        <div>
            <h1>give feedback</h1>
            <Button text='good' handleClick={() => setGood(good + 1)}/>
            <Button text='neutral' handleClick={() => setNeutral(neutral+1)}/>
            <Button text='bad' handleClick={ () => setBad(bad+1)}/>
            <Statistics good={good} neutral={neutral} bad={bad}/>
        </div>
    )
}


ReactDOM.render(
    <App />,
    document.getElementById('root'))