import React from "react"; 
import { SpinnerContainer, SpinnerOverlay } from "./with-spinner.styles";
const WithSpinner = WrappeComponent => ({ isLoading, ...otherProps }) => (
    isLoading?
        (
        <SpinnerOverlay>
           <SpinnerContainer/>
        </SpinnerOverlay>) :
        <WrappeComponent {...otherProps}/>
);
export default WithSpinner;