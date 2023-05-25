import {React, useState} from 'react'

export default function ProjectThumbnail({name}) {
  return (
    <div className='project-thumbnail glass-effect'>
      <i className="fa-solid fa-folder"></i>
      <p>{name}</p>
      <button><i class="las la-edit"></i></button>
    </div>
  )
}
