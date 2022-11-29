import './css/style.css';
import test from './images/test.png'

function App() {

  let text = 'test variable';
  let text2 = '222'

  const style = {
    fontSize: '24px',
    fontStyle: 'italic',
    color: 'red'
  }

  return (
    <>
      <div className="container">
        <h1><code style={style}>app_1</code></h1>
        <img src={test} alt='testImage' />
        <ul>
          <li>Hello</li>
          <li>{text + text2}</li>
        </ul>
      </div>
    </>
  );
}


export default App;
