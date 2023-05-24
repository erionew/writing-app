import { Routes, Route } from 'react-router-dom';
import './App.css';
import Projects from './components/Projects';
import NewDocument from './components/NewDocument';

function App() {
  fetch('https://e-inkling.herokuapp.com/')
    .then(res => res.json())
    .then(data => console.log(data))

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Projects />}></Route>
        <Route path='/editor' element={<NewDocument />}></Route>

      </Routes>
    </div>
  );
}

export default App;
