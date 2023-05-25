import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { EditorState, convertToRaw, convertFromRaw} from 'draft-js'
import { Editor } from 'react-draft-wysiwyg';
import '../stylesheets/Editor.css'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { deleteDocument, putDocument } from './CRUDrequests';

export default function EditEditor({documentId, docTitle, documentData, projectId}) {
    
    const navigate = useNavigate()

    const [documentTitle, setDocumentTitle] = useState(docTitle)
    // when the data comes back from the backend, it needs to be converted back to draftjs format so that the format does not get lost
    const [editorState, setEditorState] = useState(() => EditorState.createWithContent(convertFromRaw(JSON.parse(documentData.content))))
    const [convertedContent, setConvertedContent] = useState(null);
    const [wordCount, setWordCount] = useState(0)
    

    const handleFormSubmit = (e) => {
        //when the form is submitted, the content from the editor is converted to Raw JSON
        e.preventDefault()
        let content = JSON.stringify(convertToRaw(editorState.getCurrentContent()));
        setConvertedContent(content);
        // put request
        putDocument(documentTitle, projectId, convertedContent, documentId)
    }


    const getWordCount = (editorState) => {
        const plainText = editorState.getCurrentContent().getPlainText('');
        const regex = /(?:\r\n|\r|\n)/g;  // new line, carriage return, line feed
        const cleanString = plainText.replace(regex, ' ').trim(); // replace above characters w/ space
        const wordArray = cleanString.match(/\S+/g);  // matches words according to whitespace
        return wordArray ? wordArray.length : 0;
    }

    //updates word count when the editor is altered
    useEffect(() => {
        setWordCount(getWordCount(editorState))
    }, [editorState])

    const handleDelete = () => {
        navigate(`/projects/${projectId}`)
        deleteDocument(documentId)
    }

    return (
        <div className='container--page'>
            <form className='editor__form flex'>
                {/* setting up the editor */}
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
                        <button onClick={handleDelete} className='button--red'>Delete</button>
                    </div>
                    <Link className ='glass-effect doc-details__back-link' to={`../projects/${projectId}`}><i class="las la-arrow-left"></i> Back To Project</Link>
                </div>
            </form>
        </div>
    )
}
