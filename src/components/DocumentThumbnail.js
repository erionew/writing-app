import React from 'react'

export default function DocumentThumbnail({name}) {
  return (
    <div className='project-thumbnail glass-effect'>
      <i class="fa-solid fa-file"></i>
      <p>{name}</p>
    </div>
  )
}
