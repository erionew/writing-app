import {React, useState, useEffect} from 'react'
import ProjectThumbnail from './ProjectThumbnail'
import '../stylesheets/Projects.css'

export default function Projects() {

  const [projects, setProjects] = useState([])

  useEffect(() => {
    fetch('https://e-inkling.herokuapp.com/')
    .then(res => res.json())
    .then(data => setProjects(data))
  }, [])

  console.log(projects[0])
  
  return (
    <div className='container--page'>
        <header className='page__header'>
          <h1 className='h1--page-title'>Projects</h1>
          <button className='button--white'>New Project +</button>
        </header>
        <div className='container--flex'>
          {projects.map(project =>{
            return <ProjectThumbnail name={project.name} />
          })}
        </div>
    </div>
  )
}
