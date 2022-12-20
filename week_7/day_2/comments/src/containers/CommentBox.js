import React,{useState} from 'react';
import CommentList from '../components/CommentList';


const CommentBox = () => {

    const [comments,setComments] = useState([
        {
            id: 1,
            author: 'R. Henry',
            text: 'Great food!'
        },
        {
            id: 2,
            author: 'V. Gibson',
            text: 'Soggy Chips!'
        }
    ]);

    return (
        <>
            <h1>Comments</h1>
            <CommentList comments={comments} />
        </>
    )   
}




export default CommentBox;
