import './App.css';
import Die from './components/Die';

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

  return (
    <main>
      <div className='wrapper'>
        {dieElements}
      </div>
    </main>
  );
}

export default App;
