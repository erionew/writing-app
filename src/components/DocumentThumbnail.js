import React from 'react'
import { Link } from 'react-router-dom'

export default function DocumentThumbnail({name}) {
  return (
      <div className='project-thumbnail glass-effect'>
        <i className="fa-solid fa-file"></i>
        <p>{name}</p>
      </div>
  )
}
