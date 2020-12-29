import data from './etsy.json'
import './App.css';
import {Listing} from './components/Listing'

function App() { 
  const cards = data;
  return (
    <div className="App">
      <Listing items={cards}/>
    </div>
  );
}

export default App;
