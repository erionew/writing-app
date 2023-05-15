import React from 'react'
import ProjectThumbnail from './ProjectThumbnail'
import '../stylesheets/Projects.css'
export default function AllProjects() {
  return (
    <div container--page>
        <header className='page__header'>
          <h1 className='h1--page-title'>Projects</h1>
          <button className='button--blue'>New Project +</button>
        </header>
        <div className='container--projects'>
          <ProjectThumbnail name = 'Untitled' />
          <ProjectThumbnail name = 'Longer name' />
          <ProjectThumbnail name = 'Untitled' />
          <ProjectThumbnail name = 'Untitled' />
        </div>
    </div>
  )
}
