import React from 'react'
import { deleteProject } from './CRUDrequests'
import { Link, useNavigate } from 'react-router-dom'

export default function DeleteProject({closeFn, projectId, projectName}) {

    const navigate = useNavigate()

    const handleDelete = () => {
        navigate('/projects')
        deleteProject(projectId)
    }
    
  return (
    <div className='popup'>
      <h3>Warning!</h3>
        <p>{`${projectName} will be permanantly deleted.`}</p>
        <div className='container--buttons flex'>
            <button className='button--red' onClick={handleDelete}>Delete</button>
            <Link to='/'><button className='button--white' onClick={closeFn}>Cancel</button></Link>
        </div>
      <button className='button--close' onClick={closeFn}>×</button>    
    </div>
  )
}