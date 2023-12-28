const InputElement = ({ text }) => {
  return (
    <div className='InputElement-container'>
      <div>{text}: </div>
      <input type="text" />
    </div>
  );
};

export default InputElement;