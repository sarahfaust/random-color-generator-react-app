import './App.css';
import randomColor from 'randomcolor';
import { useState } from 'react';

function StartButtons(props) {
  return (
    <>
      <p style={{ textTransform: 'uppercase', fontSize: '5em' }}>
        {props.color}
      </p>
      <button
        onClick={() => {
          props.setColor(randomColor);
        }}
      >
        Generate
      </button>
      <button
        onClick={() => {
          props.setChoose('choose');
        }}
      >
        Choose
      </button>
    </>
  );
}

function ChoiceButtons(props) {
  const [hue, setHue] = useState('');
  const [luminosity, setLuminosity] = useState('');

  const hueList = [
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'purple',
    'pink',
    'monochrome',
  ];

  const luminosityList = ['light', 'bright', 'dark'];

  return (
    <>
      <p style={{ textTransform: 'uppercase', fontSize: '5em' }}>
        {props.color}
      </p>
      <button
        onClick={() => {
          setHue(hue);
        }}
      >
        Hue
      </button>
      <button
        onClick={() => {
          setLuminosity(luminosity);
        }}
      >
        Luminosty
      </button>
    </>
  );
}

function App() {
  const [choose, setChoose] = useState('generate');
  const [color, setColor] = useState('#282c34');

  return (
    <div className="App">
      <header className="App-header" style={{ backgroundColor: color }}>
        {choose === 'generate' && (
          <StartButtons
            setChoose={setChoose}
            setColor={setColor}
            color={color}
          />
        )}
        {choose === 'choose' && (
          <ChoiceButtons setColor={setColor} color={color} />
        )}
      </header>
    </div>
  );
}

export default App;
