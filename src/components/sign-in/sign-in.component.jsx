import React, {useState} from "react"; 
import {connect } from "react-redux"

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import {SignInContainer, Title, ButtonsContainer}  from "./sign-in.styles"

import {googleSignInStart,emailSignInStart} from "../../redux/user/user.actions"

const SignIn = ({emailSignInStart, googleSignInStart}) => {
    const [userCredentials , setUserCredentials] = useState({email: '', password:''})
    const { email, password, } = userCredentials; 

    const handleSubmit= async event=>{
        event.preventDefault() 
        
        emailSignInStart(email, password)

    }
    const handleChange= event=>{
        const {name , value} = event.target ; 
        setUserCredentials({...userCredentials,[name]:value})
    }

        return(
            <SignInContainer>
                <Title> Already have an account </Title>
                <span>Sign in with your email and password</span>
                <form onSubmit={handleSubmit}>
                    
                    <FormInput 
                    type="email"
                     name="email"
                      value={email} 
                      handleChange={handleChange}
                      label="Email"
                      required
                      />
                    
                    <FormInput 
                    type="password"
                     name="password" 
                     value={password} 
                     onChange={handleChange}
                     label="Password"
                     />
                   
                    <ButtonsContainer >
                    <CustomButton type="submit">Sign In</CustomButton>
                    <CustomButton type="button" onClick={googleSignInStart} isGoogleSignIn>Sign In With Google</CustomButton>

                    </ButtonsContainer>

                </form>
                
            </SignInContainer>
        )
    }
const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart:(email, password)=>dispatch(emailSignInStart({email, password}))
})
export default connect(null, mapDispatchToProps)(SignIn);