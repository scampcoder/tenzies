import './App.css';
import Die from './components/Die';
import React from 'react'
import { nanoid } from 'nanoid';

function App() {

  const [dice, setDice] = React.useState(allNewDice())

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
    setDice(allNewDice())
  }

  return (
    <main>
      <div className='wrapper'>
        {dieElements}
      </div>
      <button className="roll-dice" onClick={rollDice}>Roll Dice</button>
    </main>
  );
}

export default App;
