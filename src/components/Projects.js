import {React, useState} from 'react'
import ProjectThumbnail from './ProjectThumbnail'
import NewProject from './NewProject'
import '../stylesheets/Projects.css'
import { Link } from 'react-router-dom'

export default function Projects({projectData}) {

  const [showPopup, setShowPopup] = useState(false)

  const openPopup = (e) => {
    e.preventDefault()
    setShowPopup(true)
  }

  const closePopup = (e) => {
    e.preventDefault()
    setShowPopup(false)
  }

  return (
    <div className='container--page'>
        <header className='page__header'>
          <h1 className='h1--page-title'>Projects</h1>
          <button className='button--white' onClick={openPopup}>New Project +</button>
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
        {showPopup && <NewProject closeFn={closePopup}/>}
    </div>
  )
}
