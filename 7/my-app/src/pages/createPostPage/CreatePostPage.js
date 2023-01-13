import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {createPost} from "../../store/postsSlice";

function CreatePostPage(props) {
    const [form, setForm] = useState({})
    const dispatch = useDispatch()

    const {error} = useSelector(state => state.postsReducer)

    const changeForm = (event) => {
        setForm({...form, [event.target.name]: event.target.value})
    }

    const submit = (event) => {
        event.preventDefault()
        dispatch(createPost(form))

    }


    return (
        <>
            <form style={{
                display: 'flex',
                flexDirection: 'column',
                width: '70%',
                margin: '0 auto'
            }}
            onSubmit={submit}
            >
                <input
                    onChange={changeForm}
                    name="title"
                    type="text"
                    placeholder="title"/>
                <textarea
                    onChange={changeForm}
                    name="body"
                    cols="30"
                    rows="10"
                    placeholder="text"/>
                <button type="submit">create post</button>
            </form>
            {error && <h3>{error}</h3>}
        </>
    );
}

export default CreatePostPage;