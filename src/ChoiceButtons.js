import randomColor from 'randomcolor';
import { useEffect, useState } from 'react';
import CustomDropdown from './CustomDropdown';
import { ColorText } from './EmotionStyles';

export default function ChoiceButtons(props) {
  const [hue, setHue] = useState('Hue');
  const [lum, setLum] = useState('Luminosity');

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

  const lumList = ['light', 'bright', 'dark'];

  useEffect(() => {
    if (hueList.includes(hue) && lumList.includes(lum)) {
      props.setColor(randomColor({ luminosity: lum, hue: hue }));
    }
  }, [hue, lum]);

  return (
    <>
      <ColorText>{props.color}</ColorText>
      <CustomDropdown option={hue} options={hueList} setOptions={setHue} />
      <CustomDropdown option={lum} options={lumList} setOptions={setLum} />
    </>
  );
}
