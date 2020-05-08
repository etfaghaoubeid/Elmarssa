import React from "react"; 
import { connect } from "react-redux";

import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";

import {SignUpContainer, Title} from "./sign-up.styles"

import {signUpStart} from "../../redux/user/user.actions"

class SignUp extends React.Component{
    constructor(props){
        super(props)

        this.state={
            displayName:"", 
            email:"", 
            password:"", 
            confirmPassword:""
        }
    }
    handleChange=event=>{
        this.setState({[event.target.name]:event.target.value})
        console.log(this.state)

    }
    handleSubmit = async event=>{
        event.preventDefault() 
        const {signUpStart} = this.props
        const {displayName , email , password  ,confirmPassword} = this.state ; 
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

    render(){
        return(
            <SignUpContainer>
                <Title>I do not have an account  </Title>
                <span> Sign up with email and psssword </span>
                <form onSubmit={this.handleSubmit}>
                <FormInput 
                type="text"
                name="displayName"
                value={this.state.displayName}
                onChange={this.handleChange}
                label="Display Name"
                required/>

                <FormInput 
                type="email"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
                label="Email"
                required/>
                <FormInput 
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
                label="Password"
                required/>
                <FormInput 
                type="password"
                name="confirmPassword"
                value={this.state.confirmPassword}
                onChange={this.handleChange}
                label="confirmPassword"
                required/>

                <CustomButton type="submit"> Sign Up</CustomButton>

                </form>
            </SignUpContainer>
        )
    }
}
const mapDispatchToProps = dispatch => ({
    signUpStart:(user)=>dispatch(signUpStart(user))
})

export default connect(null , mapDispatchToProps)( SignUp);
