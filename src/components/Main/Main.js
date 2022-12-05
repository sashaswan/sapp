import React from 'react';
import { useState } from 'react';
function Main(props) {

    const [s1, setS1] = useState(0)
    const [s2, setS2] = useState(0)
    let f1 = () => {
        let newS1 = s1 + 5;
        let newS2 = s2 + 5;
        setS1(newS1)
        setS2(newS2)
        console.log(newS1 + ' changed')
        console.log(newS2 + ' changed')
    }
    return (
        <>
            <button onClick={f1}>go go</button>
        </>
    )
}
export default Main