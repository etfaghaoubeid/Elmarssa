import React from "react"; 

import {Group,FormInputs,FormInputLabel} from "./form-input.styles"

const FormInput = ({handleChange, label , ...otherPropos})=>(
    <Group>
      <FormInputs onChange={handleChange} {...otherPropos}/>
      {label? (
      <FormInputLabel
       className={`${
           otherPropos.value.length? "shrink":""
           } form-input-label`}>
          {label}
      </FormInputLabel>):null}
    </Group>
);

export default FormInput;