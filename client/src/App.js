
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import Pokedex from './components/Pokedex';
import Pokemon from './components/Pokemon';
import MyTeam from './components/MyTeam';

const teamMemberName = []
const teamMemberPic = []
const teamMemberType1 = []
const teamMemberType2 = []

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path='/' element={<Pokedex />} />
        <Route path= '/Pokemon/:id' element={<Pokemon teamMemberName={teamMemberName} teamMemberPic={teamMemberPic} teamMemberType1={teamMemberType1} teamMemberType2={teamMemberType2} />} />
        <Route path='/Myteam' element={<MyTeam teamMemberName={teamMemberName} teamMemberPic={teamMemberPic} teamMemberType1={teamMemberType1} teamMemberType2={teamMemberType2}/>} />
      </Routes>
    </div>
  );
}

export default App;
