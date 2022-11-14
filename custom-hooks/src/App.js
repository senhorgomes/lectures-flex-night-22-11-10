import './App.css';
// import Counter from './components/Counter';
import GhibliDatabase from './components/GhibliDatabase';
import StarWarsSearch from './components/StarWarsSearch';

function App() {
  return (
    <div className="App-header">
      {/* <Counter /> */}
      <GhibliDatabase/>
      <StarWarsSearch/>
    </div>
  );
}

export default App;
