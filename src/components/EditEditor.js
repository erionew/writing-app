import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { EditorState, convertToRaw, convertFromRaw} from 'draft-js'
import { Editor } from 'react-draft-wysiwyg';
import '../stylesheets/Editor.css'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { putDocument } from './CRUDrequests';

export default function EditEditor({documentId, docTitle, documentData, projectId}) {
    

    const [documentTitle, setDocumentTitle] = useState(docTitle)
    const [editorState, setEditorState] = useState(() => EditorState.createWithContent(convertFromRaw(JSON.parse(documentData.content))))
    const [convertedContent, setConvertedContent] = useState(null);


    const handleFormSubmit = (e) => {
        e.preventDefault()
        let content = JSON.stringify(convertToRaw(editorState.getCurrentContent()));
        setConvertedContent(content);
       
        putDocument(documentTitle, projectId, convertedContent, documentId)
    }

    return (
        <div className='container--page'>
            <form className='editor__form flex' onSubmit={(e) => handleFormSubmit(e)}>
                <Editor 
                    editorState={editorState}
                    onEditorStateChange={setEditorState}
                />
                <div className='container--doc-details'>
                    <input type='text' value={docTitle} onChange={(e) => setDocumentTitle(e.target.value) } className='doc-details__title glass-effect'></input>
                    <div className='doc-details__word-count glass-effect flex'>
                        <p className='word-count'>0</p>
                        <p>words</p>
                    </div>
                    <div className='doc-details__buttons flex'>
                        <button type='submit' className='button--white'>Save</button>
                        <button className='button--red'>Delete</button>
                    </div>
                    <Link className ='glass-effect doc-details__back-link' to={`../projects/${projectId}`}><i class="las la-arrow-left"></i> Back To Project</Link>
                </div>
            </form>
        </div>
    )
}
