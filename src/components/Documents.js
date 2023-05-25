import React, {useEffect} from 'react'
import DocumentThumbnail from './DocumentThumbnail'
import { Link } from 'react-router-dom'

export default function Documents({projectName, projectId, projectData, documentData}) {
  
  useEffect(() => {
    fetch('https://e-inkling.herokuapp.com/')
    .then(res => res.json())
    .then(data => console.log(data))
  }, [])

  return (
    <div className='container--page'>

        <header className='page__header'>
            <h1 className='h1--page-title project-name'>
              <Link to='/' className='link'>Projects</Link> &gt;
              <strong>{' '+ projectName}</strong>
            </h1>
            <div className='container--buttons'>
            <button className='button--white'><i class="las la-edit"></i></button>
              <Link to={`/projects/${projectId}/new/editor`}><button className='button--white'><i class="las la-plus"></i></button></Link>
              <button className='button--red'><i class="las la-trash-alt"></i></button>
            </div>
        </header>
        <div className='container--flex'>
            {documentData.map(document => {
                for(let i = 0; i < projectData.length; i++){
                  if(projectId === projectData[i].id) {
                    return(
                      <Link key={document.id} to={`/projects/${document.project}/${document.id}/editor`}>
                        <DocumentThumbnail title={document.title} />
                      </Link>
                    )
                  } else {
                    return 
                  }
                }                
            })}
        </div>
        
    </div>
  )
}
