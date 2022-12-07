import { React, useState, useEffect } from 'react'

export default function CommentListHook(props) {
    const [data, setData] = useState([]);

    useEffect(() => {
        if (props.comments.length > 0) setData(props.comments);
    }, [props]);

    function onlyEven() {
        let a = data.filter((item, index) => {
            if (index % 2 === 0) {
                return item
            }
            return false
        })
        setData(a)
    }
    return (
        <div>
            <button onClick={onlyEven}>Only even comments</button>
            {data.map((item, index) => (
                <div key={item.id}>
                    <p><b>{index + 1}. {item.email}</b></p>
                    <p>{item.body}</p>
                </div>
            ))}
        </div>
    )
}