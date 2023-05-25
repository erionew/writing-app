import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './App.css';
import Projects from './components/Projects';
import NewDocument from './components/NewDocument';
import Documents from './components/Documents';

function App() {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    fetch('https://e-inkling.herokuapp.com/')
    .then(res => res.json())
    .then(data => setProjects(data))
  }, [])

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Projects projectData={projects} />}></Route>
        <Route path='/editor' element={<NewDocument />}></Route>
        {projects.map((project) => {
          return <Route key={project.id} path={'/projects/' + project.id} element={<Documents projectName={project.name} />}></Route>
        })}
      </Routes>
    </div>
  );
}

export default App;