import React, { useState } from 'react'
import validator from "email-validator";
import { backend_url } from '../config'
import CustomWrapper from "../components/PageWrappers/CustomWrapper";
import ConnectBack from "../assets/ConnectBack.png";
import img from "../assets/register-profile.png";
import googleImg from "../assets/googleImg.png";
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

export default function Login() {
    const [input, setInput] = useState(() => ({ email: '', password: ''}))
    const [btn, setBtn] = useState(() => 'Login')
    const [error, setError] = useState(() => ({ emailError: '', passwordError: '', serverError: '' }))
    const [success, setSuccess] = useState(() => '')
    const [isBtnDisabled, setIsBtnDisabled] = useState(() => false)
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const errorList = {...error}
        if (!validator.validate(input.email)) {
            errorList.emailError = 'Invalid Email'
        } else {
            errorList.emailError = ''
        }
        if (input.password.length < 6) {
            errorList.passwordError = 'Password must be at least 6 characters long'
        } else {
            errorList.passwordError = ''
        }

        setError({...errorList})
        if(errorList.emailError === '' && errorList.passwordError === ''){
            setBtn('Loading...')
            setIsBtnDisabled(true)
            try{
                const response = await axios.post(`${backend_url}/api/users/login`, {...input}, {withCredentials: true})
                setBtn('Registered')
                setSuccess(`Login Successful!`)
                navigate('/welcome')
            } catch (error) {
                setError(() => ({...error, serverError: error.response.data.error}))
                setBtn('Login')
                setIsBtnDisabled(false)
            }
        }
    }

    return (
        <CustomWrapper style={{backgroundImage: `url(${ConnectBack})`}}>
            <div className='main-container' style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <form style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "100%",
                }}
                onSubmit={handleSubmit}>
                    <div
                        style={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        }}
                    >
                        <img src={img} alt="Profile Icon" className="profile-icon" />
                    </div>
                    <div
                        style={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        }}
                    >
                        <span className="label-text">Email</span>
                        <input
                        className="custom-input"
                        type="email"
                        placeholder="Enter Your Email"
                        name="email"
                        value={input.email}
                        onChange={(e) =>
                            setInput((prev) => ({ ...prev, email: e.target.value }))
                        }
                        />
                        {error.emailError && (
                        <div className="error-text">{error.emailError}</div>
                        )}
                    <span className='label-text'>Password</span>
                    <input className='custom-input' type="password" placeholder="Enter Your Password" name="password" value={input.password} onChange={(e) => setInput(prev => ({...prev, password: e.target.value}))} />
                    {error.passwordError && (
                        <div className="error-text">{error.passwordError}</div>
                    )}
                    </div>

                    {success && (
                        <div className="success-text">{success}</div>
                    )}

                    {error.serverError && (
                        <div className="error-text">{error.serverError}</div>
                    )}

                    <button className="register-button" type="submit" disabled={isBtnDisabled}>
                        {btn}
                    </button>

                    <div className="text-container">
                        <div className="text">OR</div>
                    </div>

                    <div>
                        <button className="google-register-button" disabled={isBtnDisabled}>
                        <img src={googleImg} alt="Google Icon" className="google-icon" />
                        LOGIN WITH GOOGLE
                        </button>
                    </div>
                </form>
            </div>
        </CustomWrapper>
    )
}