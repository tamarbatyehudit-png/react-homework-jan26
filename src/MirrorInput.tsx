import {useState} from 'react';

export const MirrorInput = () => {
    const [text, setText] = useState("");

    return (
        <div>
            <input
            onChange = {(e) => setText(e.target.value)}
            placeholder = "Type here..."
            />
            <p> I heard you say... {text}</p>
        </div>
    );

};