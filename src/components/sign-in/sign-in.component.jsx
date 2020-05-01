import React from "react"; 
import {connect } from "react-redux"
import {SignInContainer, Title, ButtonsContainer}  from "./sign-in.styles"

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import {googleSignInStart,emailSignInStart} from "../../redux/user/user.actions"

class SignIn extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            email:"", 
            password:""
        }
    }
    handleSubmit= async event=>{
        event.preventDefault() 
        const { email, password, } = this.state; 
        const {emailSignInStart} = this.props
        
        emailSignInStart(email, password)

    }
    handleChange= event=>{
        const {name , value} = event.target ; 
        this.setState({[name]:value})
    }

    render(){
        return(
            <SignInContainer>
                <Title> Already have an account </Title>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    
                    <FormInput 
                    type="email"
                     name="email"
                      value={this.state.email} 
                      handleChange={this.handleChange}
                      label="Email"
                      required
                      />
                    
                    <FormInput 
                    type="password"
                     name="password" 
                     value={this.state.password} 
                     onChange={this.handleChange}
                     label="Password"
                     />
                   
                    <ButtonsContainer >
                    <CustomButton type="submit">Sign In</CustomButton>
                    <CustomButton type="button" onClick={this.props.googleSignInStart} isGoogleSignIn>Sign In With Google</CustomButton>

                    </ButtonsContainer>

                </form>
                
            </SignInContainer>
        )
    }
}
const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart:(email, password)=>dispatch(emailSignInStart({email, password}))
})
export default connect(null, mapDispatchToProps)(SignIn);