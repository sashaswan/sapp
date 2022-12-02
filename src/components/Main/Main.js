import React from 'react';
import { useState } from 'react';
function Main(props) {
    let valueIn = React.createRef();
    const [output, setOutput] = useState('test');
    const [colorNow, setColor] = useState();
    let saveValue = React.createRef();
    const [out, setOut] = useState();
    let setRange = React.createRef();
    let pushNumber = React.createRef();
    const [out9, setOut9] = useState();
    function f1() {
        console.log('task2')
    }
    function f2(e) {
        e.target.className = "active";
    }
    function f3(e) {
        console.log(e.target.value);
    }
    let count = 0;
    function f4() {
        return (
            console.log(count++)
        )
    }
    function f5(e) {
        let out = document.querySelector('.out5');
        out.innerHTML = e.target.checked;
    }
    function f6() {
        setOutput(valueIn.current.value);
    }
    function f7() {
        let min = 0;
        let max = 255;
        let r = Math.floor(Math.random() * (max - min + 1)) + min;
        let g = Math.floor(Math.random() * (max - min + 1)) + min;
        let b = Math.floor(Math.random() * (max - min + 1)) + min;
        let color = `rgb(${r}, ${g}, ${b})`
        setColor(color)
    }
    function f8(e) {
        if(e.charCode >= 48 && e.charCode <= 57 ){
            setOut('1')
        }
        else {
            setOut('0')
        }
    }
    function f9() {
        setOut9(setRange.current.value);
    }
    let arr = [];
    function f10() {
        arr.push(+pushNumber.current.value);
        console.log(arr);
    }
    return (
        <>
            <h1>Main Page</h1>
            <h2>Task 1</h2>
            <button className="task-1" onClick={f1}>go go</button>
            <h2>Task 2</h2>
            <div onMouseEnter={f2} className='task2'>--------</div>
            <h2>Task 3</h2>
            <input type='text' onInput={f3} />
            <h2>Task 4</h2>
            <button className="task-4" onClick={f4}>go go</button>
            <h2>Task 5</h2>
            <input type='checkbox' onChange={f5} />
            <div className="out5"></div>
            <h2>Task 6</h2>
            <select className="task6" onChange={f6} ref={valueIn}>
                <option>1</option>
                <option>2</option>
            </select>
            <div className="out6">{output}</div>
            <h2>Task 7</h2>
            <div style={{ background: colorNow }} className="block-7" ></div>
            <button onClick={f7} className="task-7">Color</button>
            <h2>Task 8</h2>
            <input type='text' onKeyPress={f8} ref={saveValue} />
            <div className="out8">{out}</div>
            <h2>Task 9</h2>
            <input type='range' onInput={f9} ref={setRange}/>
            <div className="out9">{out9}</div>
            <h2>Task 10</h2>
            <input type='text' ref={pushNumber} />
            <button className='task10' onClick={f10}>go go</button>
        </>
    )
}
export default Main