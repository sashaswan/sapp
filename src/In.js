import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
    add,
    minus,
    multi,
    division,
    textInfo
} from './app/taskReducerSlice';


export default function In() {
    const dispatch = useDispatch();
    const [out, setOut] = useState();

    const [outText, setOutText] = useState();

    const addHandler = () => {
        dispatch(add(out));
    }
    const minusHandler = () => {
        dispatch(minus(out));
    }

    const multiHandler = () => {
        dispatch(multi(out));
    }

    const divisionHandler = () => {
        dispatch(division(out));
    }

    let textHandler = () => {
        dispatch(textInfo(outText));
    }
    return (
        <div>
            <input type="number" onChange={(e) => setOut(e.target.value)} />
            <h2>Task 1</h2>
            <button onClick={addHandler}>+</button>
            <button onClick={minusHandler}>-</button>
            <button onClick={multiHandler}>*</button>
            <button onClick={divisionHandler}>/</button>
            <section>
                <input type="text" onChange={(e) => setOutText(e.target.value)}/>
                <button onClick={textHandler}>go</button>
            </section>
        </div>
    );
}

