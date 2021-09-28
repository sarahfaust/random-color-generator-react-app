import './App.css';
import randomColor from 'randomcolor';
import { useState } from 'react';
import ChoiceButtons from './ChoiceButtons';
import {
  Button,
  ColorBox,
  ColorText,
  DropdownBox,
  DropdownOption,
  Header,
  Input,
} from './EmotionStyles';
import StartButtons from './StartButtons';

function App() {
  const [choose, setChoose] = useState('generate');
  const [color, setColor] = useState('#282c34');
  const [dropdownIsOpen, setDropdownIsOpen] = useState(false);
  const [boxIsVisible, setBoxIsVisible] = useState(false);
  const [boxWidth, setBoxWidth] = useState(0);
  const [boxHeight, setBoxHeight] = useState(0);

  function toggleDropdown() {
    setDropdownIsOpen((previousState) => !previousState);
  }

  function generateColor(currentColor) {
    setColor(randomColor(currentColor));
  }

  function toggleBox() {
    setBoxIsVisible((previousState) => !previousState);
  }

  return (
    <div className="App">
      <Header color={color}>
        {boxIsVisible ? <ColorBox /> : <ColorText>{color}</ColorText>}
        {choose === 'generate' && (
          <StartButtons
            setChoose={setChoose}
            setColor={setColor}
            color={color}
          />
        )}
        {choose === 'choose' && (
          <ChoiceButtons generateColor={generateColor} color={color} />
        )}
        <Button onClick={() => toggleDropdown()}>Size</Button>
        {dropdownIsOpen && (
          <DropdownBox>
            <form
              onSubmit={(event) => {
                event.preventDefault();
                toggleDropdown();
              }}
            >
              <DropdownOption
                onClick={() => {
                  setBoxIsVisible(false);
                  setBoxWidth(0);
                  setBoxHeight(0);
                }}
              >
                Reset
              </DropdownOption>
              <Input
                placeholder="Width"
                type="number"
                value={boxWidth}
                onChange={(event) => setBoxWidth(event.currentTarget.value)}
              />
              <Input
                placeholder="Height"
                type="number"
                value={boxHeight}
                onChange={(event) => setBoxHeight(event.currentTarget.value)}
              />
              <DropdownOption onClick={() => toggleBox()}>
                Select
              </DropdownOption>
            </form>
          </DropdownBox>
        )}
      </Header>
    </div>
  );
}

export default App;
