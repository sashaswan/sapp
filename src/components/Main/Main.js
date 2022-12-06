import React from 'react';
import { useState } from 'react';
function Main(props) {
    const cE = React.createElement
    const h1 = cE('h1', {}, 'header 2')
    const h2 = cE('h1', {
        style: {
            'color': 'orange'
        }
    }, 'header 2')
    const p = cE('p', { 'className': 'text-color' }, 'header 2')
    const input = cE('input', { 'defaultValue': 55 })
    const p1 = cE('p', {}, 'hi')
    const p2 = cE('p', {}, 'world')
    const div = cE('div', { 'className': 'text-gray' }, p1, p2)
    
    const [value, setValue] = useState();
    const [out, seOut] = useState([]);
    function f1() {
        seOut((curr) => [...curr, value])
        setValue('');
    }
    const input2 = cE('input', { onChange: (e) => setValue(e.target.value)})
    const button = cE('button', { onClick: f1 }, 'go')


   
    return (
        <>
            {h1}
            {h2}
            {p}
            {input}
            {div}
            {input2}
            {button}
            {out}
        </>
    )
}
export default Main