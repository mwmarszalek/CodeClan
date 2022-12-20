import React from 'react';

const Comment = ({author, children}) => {
    return (
        <>
            <h4>{author}</h4>
            <p>{children}</p>
        </>
    )   
}


export default Comment;