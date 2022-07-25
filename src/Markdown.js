import { useState } from 'react';
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
            <div id="preview">
                <ReactMarkdown>
                    {code}
                </ReactMarkdown>
            </div>

        </div>
    )
}

export default Markdown;