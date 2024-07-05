import { useState } from 'react';
import Button from './button';
import Statistics from './statistics';
const NoFeedBack = (props) => {
  if (props.clicks.length === 0) {
    return (
      <div>
        <h2>No FeedBack Given Yet</h2>
      </div>
    )
  }
  return (
    <div>
      <Statistics good = {props.good} bad = {props.bad} neutral = {props.neutral} total = {props.total} average = {props.average} positive = {props.positive}/>
    </div>
  )
}
function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [clicks, setClicks] = useState([])
  const total = good + neutral + bad
  const average = total === 0 ? 0 : (good - bad) / total;
  const positive = total === 0 ? 0 : (good / total) * 100;
  const handleGood = () => {
    setClicks([...clicks, 'good'])
    setGood(good + 1)
  }
  const handleBad = () => { 
    setClicks([...clicks, 'bad'])
    setBad(bad + 1)
  }
  const handleNeutral = () => {  
    setClicks([...clicks, 'neutral'])
    setNeutral(neutral + 1)
  }
  return (
    <>
      <h1>
        Unicafe: Give Feedback
      </h1>
      <div>
      <Button handleClick={handleGood} text='good'></Button>
      <Button handleClick={handleBad} text='bad'></Button>
      <Button handleClick={handleNeutral} text='neutral'></Button>
      </div>
      <NoFeedBack clicks = {clicks} good = {good} bad = {bad} neutral = {neutral} total = {total} average = {average} positive = {positive}/>
    </>
  )
}

export default App
