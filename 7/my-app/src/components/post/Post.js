import React from 'react';
import {getPostOne} from "../../store/postsSlice";
import {useDispatch} from "react-redux";

function Post({postInfo}) {
    const dispatch = useDispatch();
    const getOne = (event) => {
        dispatch(getPostOne(event.target.value))
    }
    return (
        <>
            <h4 key={postInfo.id}>{postInfo.title}</h4>
            <button value={postInfo.id} onClick={getOne} >more info</button>
            <p>-------------------------</p>
        </>
    );
}

export default Post;