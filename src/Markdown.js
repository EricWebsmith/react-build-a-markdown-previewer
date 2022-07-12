import {useState} from 'react';
import ReactMarkdown from 'react-markdown';

function Markdown() {
    const [code, setCode] = useState('this is the text.');
    const handleChange = (e) => {
        const newCode = e.target.value;
        setCode(newCode);
    }

    return (
        <div id="markdown">
            <h1>Markdown</h1>
            <textarea onChange={handleChange} id="editor" value={code}>
                
            </textarea>
            <h1>Preview</h1>
            <ReactMarkdown id="preview">
                {code}
            </ReactMarkdown>
        </div>
    )
}

export default Markdown;