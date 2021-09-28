import randomColor from 'randomcolor';
import { Button } from './EmotionStyles';

export default function StartButtons(props) {
  return (
    <>
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
