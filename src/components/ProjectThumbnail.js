import React from 'react'

export default function ProjectThumbnail({name}) {

  return (
    <div className='project-thumbnail glass-effect' >
      <i className="fa-solid fa-folder"></i>
      <p>{name}</p>
    </div>
  )
}
