import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { EditorState, convertToRaw} from 'draft-js'
import { Editor } from 'react-draft-wysiwyg';
import '../stylesheets/Editor.css'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { postDocument } from './CRUDrequests';

export default function NewEditor({docTitle, projectId}) {
    

    const [documentTitle, setDocumentTitle] = useState(docTitle)
    //the difference between the edit editor and the new editor is visible in the editorstate. New documents are created empty. 
    //existing documents are created with content that needs to be converted
    const [editorState, setEditorState] = useState(() => EditorState.createEmpty())
    const [convertedContent, setConvertedContent] = useState(null);
    const [wordCount, setWordCount] = useState(0)
    

    const handleFormSubmit = (e) => {
        e.preventDefault()
        let content = JSON.stringify(convertToRaw(editorState.getCurrentContent()));
        setConvertedContent(content);
       
        postDocument(documentTitle, projectId, convertedContent)
    }

    const getWordCount = (editorState) => {
        const plainText = editorState.getCurrentContent().getPlainText('');
        const regex = /(?:\r\n|\r|\n)/g;  
        const cleanString = plainText.replace(regex, ' ').trim(); 
        const wordArray = cleanString.match(/\S+/g);  
        return wordArray ? wordArray.length : 0;
    }

    useEffect(() => {
        setWordCount(getWordCount(editorState))
    }, [editorState])

    return (
        <div className='container--page'>
            <form className='editor__form flex'>
                <Editor 
                    editorState={editorState}
                    onEditorStateChange={setEditorState}
                />
                <div className='container--doc-details'>
                    <input type='text' placeholder={docTitle} onChange={(e) => setDocumentTitle(e.target.value) } className='doc-details__title glass-effect'></input>
                    <div className='doc-details__word-count glass-effect flex'>
                        <p className='word-count'>{wordCount}</p>
                        <p>words</p>
                    </div>
                    <div className='doc-details__buttons flex'>
                        <button onClick={(e) => {handleFormSubmit(e)}} type='submit' className='button--white'>Save</button>
                        
                    </div>
                    <Link className ='glass-effect doc-details__back-link' to={`../projects/${projectId}`}><i class="las la-arrow-left"></i> Back To Project</Link>
                </div>
            </form>
        </div>
    )
}
