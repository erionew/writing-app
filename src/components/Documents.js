import React from 'react'
import DocumentThumbnail from './DocumentThumbnail'


export default function AllDocuments({projectName}) {
  return (
    <div container--page>
        <header className='page__header'>
            <h1 className='h1--page-title'>{projectName}</h1>
            <button className='button--white'>New Document +</button>
        </header>
        <div className='container--flex'>
            <DocumentThumbnail name = 'Untitled' />
        </div>
    </div>
  )
}
