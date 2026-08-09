import React, { useEffect,useState } from 'react'
import Markdown from 'react-markdown'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atelierDuneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import MacWindows from './MacWindows'
import "./note.scss"


const Note = ({ windowName, setWindowsState }) => {

    const [ markdown, setMarkdown ] = useState(null)

    useEffect(() => {
        fetch("/Note.txt")
            .then(res => res.text())
            .then(text => setMarkdown(text))
    }, [])

    return (
        <MacWindows windowName={windowName} setWindowsState={setWindowsState} >
            <div className="note-window">
                { markdown ? <SyntaxHighlighter language='typescript' style={atelierDuneDark} >{markdown}</SyntaxHighlighter> : <p>Loading...</p> }
            </div>
        </MacWindows>
    )
}

export default Note