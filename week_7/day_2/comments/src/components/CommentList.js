import React from 'react';
import Comment from '../components/Comment';


const CommentList = ({ comments }) => {

    const commentNodes = comments.map(comment => {
        return (
            <Comment key={comment.id} author={comment.author}>
                {comment.text}
            </Comment>
        )
    })

    return (
        <>
            {commentNodes}
        </>
    )
};


export default CommentList;