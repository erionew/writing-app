import { Routes, Route } from 'react-router-dom';
import './App.css';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Projects />}></Route>

      </Routes>
    </div>
  );
}

export default App;
