import React from 'react'

export default function NewProject({closeFn}) {
  return (
    <div className='popup'>
      <h3>New Project</h3>
      <form>
        <input className='glass-effect' type='text' placeholder='Project Name'></input>
        <button className='button--white'>Create</button>
      </form>
      <button className='button--close' onClick={closeFn}>×</button>
      
    </div>
  )
}
