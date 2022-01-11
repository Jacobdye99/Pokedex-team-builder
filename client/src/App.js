
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import Pokedex from './components/Pokedex';
import Pokemon from './components/Pokemon';
import MyTeam from './components/MyTeam';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path='/' element={<Pokedex />} />
        <Route path= '/Pokemon/:id' element={<Pokemon />} />
        <Route path='/Myteam' element={<MyTeam />} />
      </Routes>
    </div>
  );
}

export default App;
