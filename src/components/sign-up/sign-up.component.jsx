import React, {useState} from "react"; 
import { connect } from "react-redux";

import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";

import {SignUpContainer, Title} from "./sign-up.styles"

import {signUpStart} from "../../redux/user/user.actions"

const SignUp = ({signUpStart }) => {
    const [userCredentials ,setUserCredentials] = useState({displayName:"", email:"",password:"", confirmPassword:""})
    const {displayName , email , password  ,confirmPassword} = userCredentials ; 
    
    const handleChange=event=>{
        setUserCredentials({...userCredentials,[event.target.name]:event.target.value})

    }
    const handleSubmit = async event=>{
        event.preventDefault() 
        if(password !== confirmPassword){
            alert("password does not match");
            return ;
        }
        const user = {
            email, 
            password, 
            displayName
        }
        signUpStart(user)
       

    }

        return(
            <SignUpContainer>
                <Title>I do not have an account  </Title>
                <span> Sign up with email and psssword </span>
                <form onSubmit={handleSubmit}>
                <FormInput 
                type="text"
                name="displayName"
                value={displayName}
                onChange={handleChange}
                label="Display Name"
                required/>

                <FormInput 
                type="email"
                name="email"
                value={email}
                onChange={handleChange}
                label="Email"
                required/>
                <FormInput 
                type="password"
                name="password"
                value={password}
                onChange={handleChange}
                label="Password"
                required/>
                <FormInput 
                type="password"
                name="confirmPassword"
                value={confirmPassword}
                onChange={handleChange}
                label="confirmPassword"
                required/>

                <CustomButton type="submit"> Sign Up</CustomButton>

                </form>
            </SignUpContainer>
        )
    }
const mapDispatchToProps = dispatch => ({
    signUpStart:(user)=>dispatch(signUpStart(user))
})

export default connect(null , mapDispatchToProps)( SignUp);
