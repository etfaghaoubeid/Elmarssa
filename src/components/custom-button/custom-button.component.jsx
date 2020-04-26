import React from "react"; 
import {CustomButtonContainer} from "./custom-button.styles"
// import "./custom-button.styles.scss" ; 

const CustomButton = (props) =>(
    <CustomButtonContainer {...props}>
        {props.children} 
    </CustomButtonContainer>
);
export default CustomButton; 