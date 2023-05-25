import React, { useState, useEffect } from 'react';
import { EditorState} from 'draft-js'
import { Editor } from 'react-draft-wysiwyg';
import { convertToHTML } from 'draft-convert';
import '../stylesheets/Editor.css'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { putDocument } from './CRUDrequests';

export default function EditEditor({documentId, docTitle, documentData, projectId}) {

    const [documentTitle, setDocumentTitle] = useState(docTitle)
    const [editorState, setEditorState] = useState(() => EditorState.createEmpty(),)
    const [convertedContent, setConvertedContent] = useState(null);

    useEffect(() => {
        let html = convertToHTML(editorState.getCurrentContent());
        setConvertedContent(html);
      }, [editorState]);

    const handleFormSubmit = (e) => {
        e.preventDefault()
        putDocument(documentTitle, projectId, convertedContent, documentId)
    }

    return (
        <div className='container--page'>
            <form className='flex' onSubmit={(e) => handleFormSubmit(e)}>
                <Editor 
                    editorState={editorState}
                    onEditorStateChange={setEditorState}
                />
                <div className='container--doc-details'>
                    <input type='text' placeholder={docTitle} onChange={(e) => setDocumentTitle(e.target.value) } className='doc-details__title glass-effect'></input>
                    <div className='doc-details__word-count glass-effect flex'>
                        <p className='word-count'>0</p>
                        <p>words</p>
                    </div>
                    <div className='doc-details__buttons flex'>
                        <button type='submit' className='button--white'>Save</button>
                        <button className='button--red'>Delete</button>
                    </div>
                </div>
            </form>
        </div>
    )
}
