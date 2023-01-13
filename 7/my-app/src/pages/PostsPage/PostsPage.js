import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getPosts} from "../../store/postsSlice";
import Post from "../../components/post/Post";

function PostsPage() {
    const dispatch = useDispatch()
    const {posts, preloader, error, user} = useSelector(state => state.postsReducer)
    const getPostsUi = () => {
        dispatch(getPosts())
    }
    useEffect(() => {
        dispatch(getPosts())
    }, [])
    return (
        <>
            <button onClick={getPostsUi}>get posts</button>
            <button>delete all</button>
            <h5>{user.title}</h5>
            <h5>{user.body}</h5>
            {
                preloader
                    ?
                    <h4>loading...</h4>
                    :
                    error
                        ?
                        <h4>{error}</h4>
                        :
                        posts.map(post => <Post key={post.id} postInfo={post}/>)
            }

        </>
    );
}

export default PostsPage;