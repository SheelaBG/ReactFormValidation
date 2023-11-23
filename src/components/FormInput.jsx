import { useState } from 'react';
import '../components/formInput.css';

const FormInput = (props) => {

    //* 1 useState and Onchange
    // return ( 
    //     <div className="form-input">
    //        <label>{props.placeholder}</label>
    //         <input type="text" placeholder={props.placeholder}  onChange={(e)=>{props.setUsername(e.target.value)}}/>
    //     </div>
    //  );

    //todo---------------------------------------------------------------- */
    //* 2
    //  return ( 
    //     <div className="form-input">
            
    //        <label>{props.placeholder}</label>
    //         <input type="text" placeholder={props.placeholder} ref={props.refer}/>
    //     </div>
    //  );

    //todo---------------------------------------------------------------- */
    //* 3
    //  return ( 
    //     <div className="form-input">
            
    //        <label>{props.placeholder}</label>
    //         <input type="text" name={props.name} placeholder={props.placeholder} />//* use name attribute otherwise we dont get data
    //     </div>
    //  );

    //todo-------------------------------------------------------------------
    //*-----usestate and onchnge re-renders page every change of input but Ref not like that 
    //* ------here not about re-render or not rendering ---> But we go for usestate below....... 

    const {id,label,errorMessage,onChange,...inputprops}=props;
    
    //highlighting the input after taking out the cursor from that .
    const[focused,setFocused]=useState(false);
    const handleFocus=()=>{
        setFocused(true);
    }

    return (
            <div className="form-input">
                <label>{label}</label>
                <input {...inputprops} 
                onChange={onChange} 

                //* on moving cursor it shows error 
                onBlur={handleFocus}

                //* after taking cursor from confirm password input then clicking on submit it shows error to password
                //* but after submition so to avoid we onfocus for confirm password...
                onFocus={()=>inputprops.name==="confirmPassword" && setFocused(true)}
                focused={focused.toString()}>
                </input>
                <span>{errorMessage}</span>
            </div>
         )
}
 
export default FormInput;