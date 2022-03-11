import './App.css';
import Die from './components/Die';
import React from 'react'
import { nanoid } from 'nanoid';

function App() {

  const [dice, setDice] = React.useState(allNewDice());
  const [tenzies, setTenzies] = React.useState(false);

  React.useEffect(()=> {
    const allHeld = dice.every(die => die.isHeld)
    const firstValue = dice[0].value
    const allSameValue = dice.every(die => die.value === firstValue)
    if (allHeld && allSameValue) {
        setTenzies(true)
        console.log("You won!")
    }
  }, [dice])

  function holdDice(id) {
    setDice(oldDice => oldDice.map(die =>{
      return die.id === id ? {...die, isHeld: !die.isHeld} : die
    }))
  }

  const dieElements = dice.map(die => <Die value={die.value} key={die.id} isHeld={die.isHeld} holdDice={() => holdDice(die.id)}/>)

  function allNewDice() {
    const newDice = []
    for (let i = 0; i < 10; i++) {
        const randomNum = Math.ceil(Math.random() * 6);
        newDice.push({value: randomNum, isHeld: false, id: nanoid()})
    }
    return newDice
  }

  function rollDice() {
    setDice(prevDice => prevDice.map(die => {
      return die.isHeld ? die : 
      {value: Math.ceil(Math.random() * 6), isHeld: false, id: nanoid()}
    }))
  }

  return (
    <main>
    <h1 className="title">Tenzies</h1>
            <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
      <div className='wrapper'>
        {dieElements}
      </div>
      <button className="roll-dice" onClick={rollDice}>Roll Dice</button>
    </main>
  );
}

export default App;
