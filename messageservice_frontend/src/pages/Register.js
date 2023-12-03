import React, { useState } from 'react'
import validator from "email-validator";
import { backend_url } from '../config'
import CustomWrapper from "../components/PageWrappers/CustomWrapper";
import ConnectBack from "../assets/ConnectBack.png";
import img from "../assets/register-profile.png";
import googleImg from "../assets/googleImg.png";
import axios from 'axios'
import {useNavigate} from 'react-router-dom';

export default function Register() {
    const [input, setInput] = useState(() => ({ email: '', name: '', password: '', dob: '' }))
    const [btn, setBtn] = useState(() => 'Register')
    const [error, setError] = useState(() => ({ emailError: '', nameError: '', passwordError: '', confirmPasswordError: '', genderError: '', dobError: '', serverError: '' }))
    const [success, setSuccess] = useState(() => '')
    const [gender, setGender] = useState(() => '')
    const [isBtnDisabled, setIsBtnDisabled] = useState(() => false)
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const errorList = {...error}
        if (input.name.length < 3) {
            errorList.nameError = 'Name must be at least 3 characters long'
        } else {
            errorList.nameError = ''
        }
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
        if (input.password !== input.confirmPassword) {
            errorList.confirmPasswordError = 'Passwords do not match'
        } else {
            errorList.confirmPasswordError = ''
        }
        if(gender === ''){
            errorList.genderError = 'Please select your gender'
        } else {
            errorList.genderError = ''
        }
        var dobDate = new Date(input.dob);
        var today = new Date();
        var age = today.getFullYear() - dobDate.getFullYear();
        var m = today.getMonth() - dobDate.getMonth();
        
        if (m < 0 || (m === 0 && today.getDate() < dobDate.getDate())) {
            age--;
        }

        if(!input.dob){
            errorList.dobError = "Please enter your date of birth";
        } else if (age < 13) {
            errorList.dobError = "You must be at least 13 years old";
        } else {
            errorList.dobError = "";
        }

        setError({...errorList})

        if(errorList.nameError === '' && errorList.emailError === '' && errorList.passwordError === '' && errorList.confirmPasswordError === '' && errorList.genderError === '' && errorList.dobError === ''){
            setBtn('Loading...')
            setIsBtnDisabled(true)
            try{
                const response = await axios.post(`${backend_url}/api/users/new`, {...input, gender, fullName: input.name}, {withCredentials: true})
                setSuccess(`You are successfully registered!`)
                setBtn('Registered')
                navigate('/welcome')
            } catch (error) {
                setError(() => ({...error, serverError: error.response.data.error}))
                setBtn('Register')
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
                        <span className="label-text">Full Name</span>
                        <input
                        className="custom-input"
                        type="text"
                        placeholder="Enter Your Full Name"
                        name="fullName"
                        value={input.name}
                        onChange={(e) =>
                            setInput((prev) => ({ ...prev, name: e.target.value }))
                        }
                        />
                        {error.nameError && (
                        <div className="error-text">{error.nameError}</div>
                        )}
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
                        <span className='label-text'>Gender</span>
                        <select className="custom-input gender-input" name="gender" value={gender} onChange={(e) => setGender(e.target.value)}>
                            <option value="" style={{color: 'black'}}>Select Gender</option>
                            <option value="male" style={{color: 'black'}}>Male</option>
                            <option value="female" style={{color: 'black'}}>Female</option>
                            <option value="other" style={{color: 'black'}}>Other</option>
                        </select>
                    {error.genderError && (
                        <div className="error-text">{error.genderError}</div>
                    )}
                    <span className='label-text'>Date of Birth</span>
                    <input className="custom-input white-icon dob-input" style={{resize: 'none'}} type="date" name="dob" value={input.dob} onChange={(e) => setInput(prev => ({...prev, dob: e.target.value}))} />
                    {error.dobError && (
                        <div className="error-text">{error.dobError}</div>
                    )}
                    <span className='label-text'>Password</span>
                    <input className='custom-input' type="password" placeholder="Enter Your Password" name="password" value={input.password} onChange={(e) => setInput(prev => ({...prev, password: e.target.value}))} />
                    {error.passwordError && (
                        <div className="error-text">{error.passwordError}</div>
                    )}
                    <span className='label-text'>Confirm Password</span>
                    <input className='custom-input' type="password" placeholder="Confirm Your Password" name="confirmPassword" value={input.confirmPassword} onChange={(e) => setInput(prev => ({...prev, confirmPassword: e.target.value}))} />
                    {error.confirmPasswordError && (
                        <div className="error-text">{error.confirmPasswordError}</div>
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
                        REGISTER WITH GOOGLE
                        </button>
                    </div>
                </form>
            </div>
        </CustomWrapper>
    )
}