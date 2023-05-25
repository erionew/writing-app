import {React, useState} from 'react'
import { postProject } from './CRUDrequests'

export default function NewProject({closeFn}) {
  const [name, setName] = useState('')
    
  return (
    <div className='popup'>
      <h3>New Project</h3>
      <form onSubmit={(e) => { 
        postProject(name)
       }}>
        <input className='glass-effect'id='name' type='text' placeholder='Project Name' onChange={ (e) => setName(e.target.value)} ></input>
        <button className='button--white'>Create</button>
      </form>
      <button className='button--close' onClick={closeFn}>×</button>
      
    </div>
  )
}
