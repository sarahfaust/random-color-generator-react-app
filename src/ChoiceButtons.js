import { useEffect, useState } from 'react';
import CustomDropdown from './CustomDropdown';

const lumList = ['light', 'bright', 'dark'];

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

export default function ChoiceButtons(props) {
  const [hue, setHue] = useState('Hue');
  const [lum, setLum] = useState('Luminosity');
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    if (flag) {
      props.generateColor({ luminosity: lum, hue: hue });
      setFlag(false);
    }
  }, [hue, lum, props, flag]);

  return (
    <>
      <CustomDropdown
        option={hue}
        options={hueList}
        setOptions={setHue}
        setFlag={setFlag}
      />
      <CustomDropdown
        option={lum}
        options={lumList}
        setOptions={setLum}
        setFlag={setFlag}
      />
    </>
  );
}
