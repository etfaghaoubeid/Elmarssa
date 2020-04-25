import React from "react"; 
import {CustomButtonContainet} from "./custom-button.styles"
// import "./custom-button.styles.scss" ; 

const CustomButton = (props) =>(
    <CustomButtonContainet  {...props}>
        {props.children} 
    </CustomButtonContainet>
);
export default CustomButton; 