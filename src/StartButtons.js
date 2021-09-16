import randomColor from 'randomcolor';
import { Button, ColorText } from './EmotionStyles';

export default function StartButtons(props) {
  return (
    <>
      <ColorText>{props.color}</ColorText>
      <Button
        onClick={() => {
          props.setColor(randomColor);
        }}
      >
        Generate
      </Button>
      <Button
        onClick={() => {
          props.setChoose('choose');
        }}
      >
        Choose
      </Button>
    </>
  );
}
