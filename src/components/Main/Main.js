import React from 'react';
import { useState, useEffect } from 'react';
import CommentListHook from '../Comments/CommentListHook';
import PostListHook from '../Post/PostListHook';
export default function Main(props) {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users/1/posts')
            .then(response => response.json())
            .then(data => setData(data))
    }, [])
    const [comments, setComments] = useState([])
    function f1(e) {
        let value = e.target.value
        fetch(`https://jsonplaceholder.typicode.com/posts/${value}/comments`)
            .then(response => response.json())
            .then(comments => setComments(comments))
    }
    return (
        <>
            <PostListHook data={data} />
            <h1>Comments</h1>
            <select onChange={f1}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
            </select>
            <CommentListHook comments={comments} />
        </>
    )
}