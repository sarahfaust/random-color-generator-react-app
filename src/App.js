import './App.css';
import { useState } from 'react';
import ChoiceButtons from './ChoiceButtons';
import { Header } from './EmotionStyles';
import StartButtons from './StartButtons';

function App() {
  const [choose, setChoose] = useState('generate');
  const [color, setColor] = useState('#282c34');

  return (
    <div className="App">
      <Header color={color}>
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
      </Header>
    </div>
  );
}

export default App;
