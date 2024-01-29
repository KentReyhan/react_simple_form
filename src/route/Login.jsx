import { useFormik } from 'formik'

import googleIcon from '../assets/google.svg'
import facebookIcon from '../assets/facebook.svg'
import emailIcon from '../assets/email.svg'
import passwordIcon from '../assets/password.svg'

import { postLoginAuth } from "../api/auth-api"
import CustomInputField from '../components/custom-input'

import { NavLink, useNavigate } from "react-router-dom";

const validate = values => {
    const errors = {};

    if (!values.email) {
        errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }

    if (!values.password) {
        errors.lastName = 'Required';
    } else if (values.password.length < 6) {
        errors.password = 'Must be 6 characters or more';
    }

    return errors;
}

export default function Login() {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validate,
        onSubmit: values => {
            postLoginAuth({ data:values }).then((response) => {
                console.log(JSON.stringify(response.data));
                if (response.data.code == 0) {
                    alert("Login has been successful");
                }
                else {
                    alert("Login failed");
                }
            })
                .catch((error) => {
                    console.log(error);
                });
        },
    });

    const navigate = useNavigate();

    return (
        <>
            <div className="sm:w-[60vw] flex flex-col align-top justify-center bg-gray-100 px-20 py-16">
                <h2 className="ml-auto text-end pt-8">Don&apos;t Have Account? <NavLink to={"/"} className="text-blue-800" onClick={() => { navigate(-1) }}>Register</NavLink></h2>
                <h1 className="pt-16">Login</h1>
                <h3 className="py-4">Login first to be able to explore inside.</h3>
                <form onSubmit={formik.handleSubmit}>
                    <CustomInputField
                        value={formik.values.email}
                        icon={emailIcon}
                        name={"email"}
                        placeholder={"Email"}
                        type={"email"}
                        onChange={formik.handleChange}
                        errors={formik.errors.email}
                    />
                    <CustomInputField
                        value={formik.values.password}
                        icon={passwordIcon}
                        name={"password"}
                        placeholder={"Password"}
                        type={"password"}
                        onChange={formik.handleChange}
                        errors={formik.errors.password}
                    />
                    <div className="flex flex-col w-full item-center my-8">
                        <button className="p-4 bg-blue-800 text-white" type="submit">Login</button>
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