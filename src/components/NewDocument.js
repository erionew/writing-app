import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'
import '../stylesheets/Editor.css';


export default function NewDocument() {

    const [value, setValue] = useState('');

    return (
        <div className='container--page flex'>
            <ReactQuill theme="snow" 
                value={value}
                onChange={setValue} />
            <div className='container--doc-details'>
                <h3 className='doc-details__title glass-effect'>Document Title</h3>
                <div className='doc-details__word-count glass-effect flex'>
                    <p className='word-count'>3,000</p>
                    <p>words</p>
                </div>
                <div className='doc-details__buttons flex'>
                    <button className='button--white'>Save</button>
                    <button className='button--red'>Delete</button>
                </div>
            </div>
        </div>
    )
}
