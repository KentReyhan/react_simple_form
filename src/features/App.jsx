import { useFormik } from 'formik'

import googleIcon from '../assets/google.svg'
import facebookIcon from '../assets/facebook.svg'
import userNameIcon from '../assets/username.svg'
import emailIcon from '../assets/email.svg'
import passwordIcon from '../assets/password.svg'

import './App.css'

function App() {

  const validate = values => {
    const errors = {};
    if (!values.userName) {
      errors.userName = 'Required';
    } else if (values.userName.length > 20) {
      errors.userName = 'Must be 20 characters or less';
    }

    if (!values.email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }

    if (!values.password) {
      errors.lastName = 'Required';
    } else if (values.password.length < 8) {
      errors.password = 'Must be 8 characters or more';
    }
  
    return errors;
  }

  const formik = useFormik({
    initialValues: {
      userName: '',
      email: '',
      password: '',
    },
    validate,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });


  return (
    <>
      <div className='background-image-container'></div>
      <div className="background-container">
        <div className="form-container">
          <h2 className="sign-in-text">Do you have account? <a href='https://google.com' id='sign-in-hyperlink'>Sign in</a></h2>
          <h1 className="form-title">Create Account</h1>
          <h3 className="form_description">Follow the instructions to make it easier to register and you will be able to explore inside.</h3>
          <form onSubmit={formik.handleSubmit}>
            <div className="input-username" >
              <input type="text" id="userName" name="userName" placeholder="Username" value={formik.values.userName} onChange={formik.handleChange}></input>
              <img src={userNameIcon} className="icon" />
              {formik.errors.userName ? <div className="input-error">{formik.errors.userName}</div> : null}
            </div>
            <div className="input-email" >
              <input type="email" name="email" placeholder="Email" value={formik.values.email} onChange={formik.handleChange}></input>
              <img src={emailIcon} className="icon" />
              {formik.errors.email ? <div className="input-error">{formik.errors.email}</div> : null}
            </div>
            <div className="input-password" >
              <input type="password" name="password" placeholder="Password" value={formik.values.password} onChange={formik.handleChange}></input>
              <img src={passwordIcon} className="icon" />
              {formik.errors.password ? <div className="input-error">{formik.errors.password}</div> : null}
            </div>
            <button className='register-button' type="submit">Create Account</button>
          </form>
          <div className="third-party-login">
            <button className="google-button" type="button"><img src={googleIcon} className="icon" />Google</button>
            <button className="facebook-button" type="button"><img src={facebookIcon} className="icon" />Facebook</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App

/*

<div>

        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
*/

/*<div className="image-container">
  <img src={imageForm} className="form-image" alt="Image Form" />
</div>*/