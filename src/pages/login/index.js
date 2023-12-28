import './style.scss'

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-sub-container">
          <div className="login-logo">
            <img src="https://wepitch.tech/wp-content/themes/astra/content/dam/infosys-web/burger-menu/en/images/wepitch-logo.png" alt="wepitch logo"/>
          </div>
          
            <form className="login-inputs">
              <div className="form-inputs">
                <div className="email-inputs">
                  <label for="email">Email: </label>
                  <input type="email" id="email" placeholder="Enter your email address" required />
                </div>
                <div className="password-inputs">
                  <label for="password">Password: </label>
                  <input type="password" id="password" placeholder="Enter your password" required />
                </div>
              </div>
            </form>
          <div className="login-other-links">
            
          </div>
        </div>
    </div>

  )
}

export default Login