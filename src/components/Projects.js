import {React, useState} from 'react'
import ProjectThumbnail from './ProjectThumbnail'
import NewProject from './NewProject'
import '../stylesheets/Projects.css'
import { Link } from 'react-router-dom'

export default function Projects({projectData}) {

  const [showNewProject, setShowNewProject] = useState(false)

  const openNewProject = (e) => {
    e.preventDefault()
    setShowNewProject(true)
  }

  const closeNewProject = (e) => {
    e.preventDefault()
    setShowNewProject(false)
  }

  return (
    <div className='container--page'>
        <header className='page__header'>
          <h1 className='h1--page-title'>Projects</h1>
          <button className='button--white' onClick={openNewProject}><i class="las la-plus"></i></button>
        </header>
        <div className='container--flex'>
          {projectData.map(project =>{
            return(
              <Link key={project.id} to={'/projects/'+project.id}>
                <ProjectThumbnail name={project.name}/>
              </Link>
            ) 
          })}
        </div>
        {showNewProject && <NewProject closeFn={closeNewProject}/>}
    </div>
  )
}
