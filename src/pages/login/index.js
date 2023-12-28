import { useState } from 'react'
import './style.scss'
import { Link } from 'react-router-dom';

const Login = ({ user }) => {
  const [signUpEnable, setIsSignUpEnable] = useState(false);
  const [forgotPasswordEnable, setForgotPasswordEnable] = useState(false);
  const handleForgotPassword = () => {

  }
  return (
    <div className="login-container">
      <div className="login-sub-container">
        <div className="login-logo">
          <img src="https://wepitch.tech/wp-content/themes/astra/content/dam/infosys-web/burger-menu/en/images/wepitch-logo.png" alt="wepitch logo" />
        </div>

        <div className="login-inputs">
          <div className="form-inputs">
            <div className="email-inputs">
              <label for="email">Email: {user} </label>
              <input type="email" id="email" placeholder="Enter your email address" required />
            </div>

            <div className="password-inputs">
              <label for="password">Password: </label>
              <input type="password" id="password" placeholder="Enter your password" required />
            </div>

            {signUpEnable && <div className="password-inputs">
              <label for="password">Phone no: </label>
              <input type="text" placeholder="Enter your phone number" />
            </div>}

            {!signUpEnable && <div className="password-inputs">
              <span onClick={handleForgotPassword}>Forgot password</span>
            </div>}
          </div>
        </div>
        <div className="login-other-links">
          <span onClick={() => setIsSignUpEnable(prev => !prev)}>{`${signUpEnable ? 'Login' : 'Sign up'}`}</span>
        </div>
      </div>
    </div>

  )
}

export default Login