import { useEffect, useState } from 'react';
import axios from 'axios';
import Input from './components/Input';
import logo from './assets/logo.svg';
import './assets/App.css';
import './assets/all.scss';

function App() {

  const [text, setText] = useState('132');

  useEffect(() => {
    (async () => {
      const result = await axios.get(process.env.REACT_APP_link1);
      console.log(result);
    })()
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button type="button" className="btn btn-primary">Primary</button>
        <Input id="item" text="輸入內容"  value={text} InputEvent={(e) => setText(e.target.value)} />
      </header>
    </div>
  );
}

export default App;
