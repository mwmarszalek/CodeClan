import React,{useState} from 'react'


const CommentForm = ({ onCommentSubmit }) => {

    const [author,setAuthor] = useState('');
    const [text,setText] = useState('');

    const handleAuthorChange = (event) => {
        setAuthor(event.target.value);
    }

    const handleTextChange = (event) => {
        setText(event.target.value);
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        const authorToSubmit = author.trim();
        const textToSubmit = text.trim();

        if (!authorToSubmit || !textToSubmit) { // if strings empty
            return;
        }
        
        onCommentSubmit({
            author: authorToSubmit,
            text: textToSubmit
        });

        setAuthor('');
        setText('');
    }

    


    return (
        <form onSubmit={handleFormSubmit}>
            <input
                value={author}
                type="text"
                placeholder='Your name'
                onChange={handleAuthorChange}
            />
            <input
                value={text}
                type="text"
                placeholder='Say something'
                onChange={handleTextChange}
            />
            <input type="submit" value="Post comment" />
        </form>
    )
}

export default CommentForm