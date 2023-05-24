import {React, useState, useEffect} from 'react'
import ProjectThumbnail from './ProjectThumbnail'
import NewProject from './NewProject'
import '../stylesheets/Projects.css'
import { Link } from 'react-router-dom'

export default function Projects() {

  const [projects, setProjects] = useState([])
  const [showPopup, setShowPopup] = useState(false)

  const buttonHandler = (e) => {
    e.preventDefault()
    showPopup ? setShowPopup(false) : setShowPopup(true)
  }

  const openPopup = (e) => {
    e.preventDefault()
    setShowPopup(true)
  }

  const closePopup = (e) => {
    e.preventDefault()
    setShowPopup(false)
  }

  useEffect(() => {
    fetch('https://e-inkling.herokuapp.com/')
    .then(res => res.json())
    .then(data => setProjects(data))
  }, [])
  
  return (
    <div className='container--page'>
        <header className='page__header'>
          <h1 className='h1--page-title'>Projects</h1>
          <button className='button--white' onClick={openPopup}>New Project +</button>
        </header>
        <div className='container--flex'>
          {projects.map(project =>{
            return(
              <Link to={'/projects/'+project.id}>
                <ProjectThumbnail name={project.name}/>
              </Link>
            ) 
          })}
        </div>
        {showPopup && <NewProject closeFn={closePopup}/>}
    </div>
  )
}
