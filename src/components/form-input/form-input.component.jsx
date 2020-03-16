import React from "react" ; 

import "./form-input.styles.scss" ;

const FormInput = ({handleChange, label , ...otherPropos})=>(
    <div className="group">
      <input className="form-input" onChange={handleChange} {...otherPropos}/>
      {label? (
      <label
       className={`${
           otherPropos.value.length? "shrink":""
           } form-input-label`}>
          {label}
      </label>):null}
    </div>
);

export default FormInput;