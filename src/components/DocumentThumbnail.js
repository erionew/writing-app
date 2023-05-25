import React from 'react'
import { Link } from 'react-router-dom'

export default function DocumentThumbnail({title}) {
  return (
      <div className='project-thumbnail glass-effect'>
        <i className="fa-solid fa-file"></i>
        <p>{title}</p>
      </div>
  )
}
