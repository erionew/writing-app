import {React, useState} from 'react'
import { putProject } from './CRUDrequests'

export default function EditProject({closeFn, projectName, projectId}) {
  const [name, setName] = useState('')
    
  return (
    <div className='popup'>
      <h3>Edit Project</h3>
      <form onSubmit={(e) => { 
        putProject(name, projectId)
       }}>
        <input className='glass-effect'id='name' type='text' placeholder={projectName} onChange={ (e) => setName(e.target.value)} ></input>
        <button className='button--white'>Update</button>
      </form>
      <button className='button--close' onClick={closeFn}>×</button>
      
    </div>
  )
}