import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {selectValue, selectText} from './app/taskReducerSlice';

export default function Out() {
    const task1 = useSelector(selectValue);
    const task2 = useSelector(selectText);
    const dispatch = useDispatch();

    return (
        <div>
            <hr/>
            <h2>Task 1</h2>
            <p>{task1}</p>
            <p>{task2}</p>
        </div>
    );
}