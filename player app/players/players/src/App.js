import './App.css';
import Player from './component/Player';
import Home from './component/Home';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/players' element={<Player/>}/>
      </Routes>
    </div>
  );
}

export default App;
