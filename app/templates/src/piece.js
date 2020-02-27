import Tone from 'tone';

const makePiece = ({ audioContext, destination, samples }) => {
  if (Tone.context !== audioContext) {
    Tone.setContext(audioContext);
  }
  // create piece
  return () => {
    // clean up
  };
};

export default makePiece;
