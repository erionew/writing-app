import { Routes, Route, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './App.css';
import Projects from './components/Projects';
import EditEditor from './components/EditEditor';
import Documents from './components/Documents';

function App() {
  const [projects, setProjects] = useState([])
  const [documents, setDocuments] = useState([])

  useEffect(() => {
    fetch('https://e-inkling.herokuapp.com/')
    .then(res => res.json())
    .then(data => setProjects(data))

    fetch('https://e-inkling.herokuapp.com/documents')
    .then(res => res.json())
    .then(data => setDocuments(data))
  }, [])

  return (
    <div className="App">
      <div className='bg'></div>
      <Routes>
        <Route path='/' element={<Navigate to='/projects' />}></Route>
        <Route path='projects' element={<Projects projectData={projects} />}></Route>
        {projects.map((project) => {
          return (<Route key={project.id} path={'/projects/' + project.id} element={<Documents projectName={project.name} projectId={project.id} projectData={projects} documentData={documents} />}></Route>)
        })}
        {documents.map(document => {
          console.log(document.content)
          return (<Route path={`/projects/${document.project}/editor`} element={<EditEditor documentId={document.id} docTitle={document.title} documentData={document} projectId={document.project}/>}></Route>)
        })}
      </Routes>
    </div>
  );
}

export default App;