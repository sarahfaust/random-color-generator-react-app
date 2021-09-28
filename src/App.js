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
  const [boxWidth, setBoxWidth] = useState('Width');
  const [boxHeight, setBoxHeight] = useState('Height');
  const [width, setWidth] = useState('');
  const [height, setHeight] = useState('');

  function toggleDropdown() {
    setDropdownIsOpen((previousState) => !previousState);
  }

  function generateColor(currentColor) {
    setColor(randomColor(currentColor));
  }

  function toggleBox() {
    // is there a nicer way to solve this?
    // currently using extra state variables (height and width)
    // to ensure state is passed to props only on button click
    setWidth(`${boxWidth}px`);
    setHeight(`${boxHeight}px`);
    setBoxIsVisible(true);
  }

  return (
    <div className="App">
      <Header color={color}>
        {boxIsVisible ? (
          <ColorBox width={width} height={height} />
        ) : (
          <ColorText>{color}</ColorText>
        )}
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
                  setBoxWidth('Width');
                  setBoxHeight('Height');
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
                min="0"
                max="1000"
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
