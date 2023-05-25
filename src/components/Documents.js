import React, {useState} from 'react'
import DocumentThumbnail from './DocumentThumbnail'
import { Link } from 'react-router-dom'
import EditProject from './EditProject'
import DeleteProject from './DeleteProject'

export default function Documents({projectName, projectId, projectData, documentData}) {

  const [showEditProject, setShowEditProject] = useState(false)
  const [showDeleteProject, setShowDeleteProject] = useState(false)

  //functions that handle the popups
  const openEditProject = (e) => {
    e.preventDefault()
    setShowEditProject(true)
  }

  const closeEditProject = (e) => {
    e.preventDefault()
    setShowEditProject(false)
  }

  const openDeleteProject = (e) => {
    e.preventDefault()
    setShowDeleteProject(true)
  }

  const closeDeleteProject = (e) => {
    e.preventDefault()
    setShowDeleteProject(false)
  }

  return (
    <div className='container--page'>

        <header className='page__header'>
            <h1 className='h1--page-title project-name'>
              <Link to='/' className='link'>Projects</Link> &gt;
              <strong>{' '+ projectName}</strong>
            </h1>
            <div className='container--header-buttons flex'>
            <button className='button--white' onClick={openEditProject}><i className="las la-edit"></i></button>
              <Link to={`/projects/${projectId}/new/editor`}><button className='button--white'><i className="las la-plus"></i></button></Link>
              <button className='button--red' onClick={openDeleteProject}><i className="las la-trash-alt"></i></button>
            </div>
        </header>
        <div className='container--flex'>
          { 
            //this loops through the document data to find what project it belongs to. I had to rewrite this 10,000 times
            documentData.map(document => {
              for(let i = 0; i < documentData.length; i++){
                if(projectId === document.project) {
                  console.log(document.title)
                  //then it returns the document link on the matching project page
                  return (<Link to={`/projects/${document.project}/${document.id}/editor`}>
                            <DocumentThumbnail title={document.title} />
                          </Link>) 
                }
              }
            })
          }
        </div>
        {/* conditonal rendering for the popups */}
        {showEditProject && <EditProject closeFn={closeEditProject} projectName={projectName} projectId={projectId}/>}
        {showDeleteProject && <DeleteProject closeFn={closeDeleteProject} projectName={projectName} projectId={projectId}/>}
        
    </div>
  )
}
