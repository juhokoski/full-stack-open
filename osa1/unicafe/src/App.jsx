import { useState } from 'react'

const handleClick = () => {
  console.log('clicked')

}

const Statistics =(props) => {
  console.log(props)

  if (props.total === 0) {
    return (
      <div>
        No feedback given
      </div>
    )
  }
    return(
      <table>
        <tbody>
          <StatisticLine text="good" value ={props.good} />
          <StatisticLine text="neutral" value ={props.neutral} />
          <StatisticLine text="bad" value ={props.bad} />
          <StatisticLine text="all" value ={props.total}/>
          <StatisticLine text="average" value ={props.average}/>
          <StatisticLine text="positive" value ={props.positives + '%'}/>
        </tbody>
      </table>
    ) 
}

const StatisticLine = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>

  )
}

const Button = (props) => {
  return (
    <div>
      <button onClick={props.handleClick}>{props.text}</button>
    </div>
  )
}

const App = () => {
  const [ good, setGood] = useState(0)
  const [ neutral, setNeutral] = useState(0)
  const [ bad, setBad] = useState(0)


  const increaseGood = () => setGood(good + 1)
  const increaseNeutral = () => setNeutral(neutral + 1)
  const increaseBad = () => setBad(bad + 1)

  const total = good + neutral + bad
  const average = (((good - bad) / total)).toFixed(1)
  const positives = ((good / total) * 100).toFixed(1)

  return (
    <div>
        <h1>give feedback</h1>
        <Button handleClick={increaseGood} text="good" />
        <Button handleClick={increaseNeutral} text="neutral" />
        <Button handleClick={increaseBad} text="bad" />
        <h1>statistics</h1>
        <Statistics good={good} neutral={neutral} bad={bad} total={total} average={average} positives={positives} />
        
    </div>
  )
}

export default App