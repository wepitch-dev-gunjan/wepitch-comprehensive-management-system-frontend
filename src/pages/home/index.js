import InputElement from '../../components/inputElement';
import './style.scss'

const Home = () => {
  const inputs = ['Email', 'Password', 'Rakshita', 'Abhishek Sir'];
  return (
    <div>
      {inputs.map(input => (
        <InputElement text={input} />
      ))}
    </div>
  )
}

export default Home