import React, { useState } from 'react'
import DocumentThumbnail from './DocumentThumbnail'
import { Link } from 'react-router-dom'

export default function Documents({projectName, projectId, projectData, documentData}) {
  return (
    
    <div className='container--page'>

        <header className='page__header'>
            <h1 className='h1--page-title project-name'>
              <Link to='/'>Projects</Link> &gt;
              <strong>{' '+ projectName}</strong>
            </h1>
            <button className='button--white'>New Document +</button>
        </header>
        <div className='container--flex'>
            {documentData.map(document => {
                for(let i = 0; i < projectData.length; i++){
                  console.log(document.content)
                  if(projectId === projectData[i].id) {
                    return(
                      <Link to={`/projects/${projectId}/editor`}>
                        <DocumentThumbnail key={document.id} title={document.title} />
                      </Link>
                    )
                  } else {
                    return (<div>This folder is empty.</div>)
                  }
                }                
            })}
        </div>
        
    </div>
  )
}
