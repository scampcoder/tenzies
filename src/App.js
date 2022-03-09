import './App.css';
import Die from './components/Die';
import React from 'react'

function App() {

  const [dice, setDice] = React.useState(allNewDice())

  const dieElements = dice.map(die => <Die value={die} />)

  function allNewDice() {
    const newDice = []
    for (let i = 0; i < 10; i++) {
        newDice.push(Math.ceil(Math.random() * 6))
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
