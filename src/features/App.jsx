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

      <div className="flex flex-col align-top justify-center bg-gray-100 px-20 pb-24">
        <h2 className="ml-auto text-end pt-8">Do you have account? <a href='https://google.com' className="text-blue-800">Sign in</a></h2>
        <h1 className="pt-16">Create Account</h1>
        <h3 className="py-4">Follow the instructions to make it easier to register and you will be able to explore inside.</h3>
        <form onSubmit={formik.handleSubmit}>
          <div className="flex justify-start items-center relative">
            <input className="box-border w-full my-4 p-4 ps-12 rounded" type="text" id="userName" name="userName" placeholder="Username" value={formik.values.userName} onChange={formik.handleChange}></input>
            <img src={userNameIcon} className="absolute ml-4 w-5" />
            {formik.errors.userName ? <div className="input-error">{formik.errors.userName}</div> : null}
          </div>
          <div className="flex justify-start items-center relative">
            <input className="box-border w-full my-4 p-4 ps-12 rounded" type="email" name="email" placeholder="Email" value={formik.values.email} onChange={formik.handleChange}></input>
            <img src={emailIcon} className="absolute ml-4 w-5" />
            {formik.errors.email ? <div className="input-error">{formik.errors.email}</div> : null}
          </div>
          <div className="flex justify-start items-center relative">
            <input className="box-border w-full my-4 p-4 ps-12 rounded" name="password" placeholder="Password" value={formik.values.password} onChange={formik.handleChange}></input>
            <img src={passwordIcon} className="absolute ml-4 w-5" />
            {formik.errors.password ? <div className="input-error">{formik.errors.password}</div> : null}
          </div>
          <div className="flex flex-col w-full item-center my-8">
            <button className="p-4 bg-blue-800 text-white" type="submit">Create Account</button>
          </div>

        </form>
        <div className="flex flex-col md:flex-row  box-border justify-center ">
          <button className="w-full flex text-black text-center items-center bg-white md:mr-4 md:my-0 my-4 p-4 border border-solid border-gray-100" type="button"><img src={googleIcon} className="mr-4" />Google</button>
          <button className="w-full flex text-black text-center items-center bg-white md:ml-4 md:my-0 my-4 p-4 border border-solid border-gray-100" type="button"><img src={facebookIcon} className="mr-4" />Facebook</button>
        </div>
      </div>
    </>
  )
}

export default App