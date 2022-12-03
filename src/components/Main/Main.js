import React from 'react';
import { useState } from 'react';
function Main(props) {
    let valueIn = React.createRef();
    const [output, setOut] = useState();
    let f1 = () => {
        let value = valueIn.current.value;
        setOut(value)
    }
    const [count, setCount] = useState(0);
    let f2 = () => {
        let value = count;
        value++
        setCount(value)
    }
    const [outInput, setInputOut] = useState();
    let f3 = (e) => {
        let inputValue = e.target.value;
        setInputOut(inputValue)
    }
    const [clickCount, setClickCount] = useState(0);
    let f4 = () => {
        let value = clickCount;
        value++
        setClickCount(value)
    }
    const [check, setCheck] = useState();
    let f5 = (e) => {
        let value = e.target.checked
        if (value === true) {
            setCheck(1)
        }
        else {
            setCheck(0)
        }
    }
    const [selectValue, setSelectValue] = useState();
    let f6 = (e) => {
        let value = e.target.value;
        setSelectValue(value);
    }
    const [colorNow, setColor] = useState();
    let f7 = () => {
        let min = 0;
        let max = 255;
        let r = Math.floor(Math.random() * (max - min + 1)) + min;
        let g = Math.floor(Math.random() * (max - min + 1)) + min;
        let b = Math.floor(Math.random() * (max - min + 1)) + min;
        let color = `rgb(${r}, ${g}, ${b})`
        setColor(color)
    }
    const [number, setNumber] = useState();
    function f8(e) {
        if (e.charCode >= 48 && e.charCode <= 57) {
            setNumber('1')
        }
        else {
            setNumber('0')
        }
    }
    const [out9, setRange] = useState();
    function f9(e) {
        setRange(e.target.value);
    }

    // const f10 = React.createRef();
    const [value10, setValue10] = useState();
    const [st10, setSt10] = useState([]);
    function task10() {
        setSt10((curr) => [...curr, value10])
        setValue10('');
    }

    return (
        <>
            <input ref={valueIn} />
            <button className='btn1' onClick={f1}>go go</button>
            {output}
            <section>
                <div className='block2' onMouseEnter={f2} style={{ width: "100px", height: '100px', background: 'black' }}></div>
                {count}
            </section>
            <section>
                <input onInput={f3} />
                {outInput}
            </section>
            <section>
                <button onClick={f4}>go go go </button>
                {clickCount}
            </section>
            <section>
                <input type="checkbox" onChange={f5} />
                {check}
            </section>
            <section>
                <select onChange={f6}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                </select>
                {selectValue}
            </section>
            <section>
                <button onClick={f7}>color</button>
                <div className='block7' style={{ width: "100px", height: '100px', background: colorNow }}></div>
            </section>
            <section>
                <input type='text' onKeyPress={f8} />
                {number}
            </section>
            <section>
                <input type='range' onInput={f9} />
                {out9}
            </section>
            <section>
                <h2>Task 10</h2>
                <input type="text" className="i-10" onChange={(e) => setValue10(e.target.value)} value={value10}></input>
                <button onClick={task10} className="task-10">Push</button>
                <div>{st10}</div>
            </section>
        </>
    )
}
export default Main