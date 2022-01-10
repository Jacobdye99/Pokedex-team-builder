
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import Pokedex from './components/Pokedex';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path='/' element={<Pokedex />} />
      </Routes>
    </div>
  );
}

export default App;
