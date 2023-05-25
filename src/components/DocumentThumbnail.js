import React from 'react'

export default function DocumentThumbnail({title}) {
  return (
      <div className='project-thumbnail glass-effect'>
        <i className="fa-solid fa-file"></i>
        <p>{title}</p>
      </div>
  )
}
