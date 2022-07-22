import React from "react";
import { useState } from "react";
import "./input-text.css";
import { AiOutlineEye, AiOutlineEyeInvisible  } from "react-icons/ai";
import{RiErrorWarningFill, RiCheckboxCircleFill, RiCloseCircleFill} from "react-icons/ri";

const InputText = (props) => {
  const { status, placeholder, disabled, label, type, required, validationMessage} = props; // TODo: Required field, finish validations
  let className = "";
  let additionalInfo = '';
  let additionalInfoClass = '';

  const [passwordError, setPasswordErr] = useState("");
  const [strongPassword, setstrongPassword] = useState(false);
  const [weakPassword, setWeakPassword] = useState(false);

  const passwordStrength=(evnt)=>{
    var passwordValue = evnt.target.value;
    let strongPassword = new RegExp("^(?=.{14,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$", "g");
    let mediumPassword = new RegExp("^(?=.{10,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$", "g");

    if(passwordValue.length === 0){
      setWeakPassword(false);
      setstrongPassword(false)
    }

    if (mediumPassword.test(passwordValue)){
      setPasswordErr('This is a Medium password');
      setWeakPassword(true);
      className = additionalInfoClass = 'warning';
    }
    
    if (strongPassword.test(passwordValue))
    {
      setPasswordErr('This is a strong password')
      setstrongPassword(true);
      className = additionalInfoClass = 'success';
    }
  }

  if (status === 'success') {
    className += 'success';
  }
  if (status === 'warning') {
    className += 'warning';
  }
  if (status === 'error') {
    className += 'error';
  }
  if (disabled) {
    className += 'disable';
  }

  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };
  
  const eyeStyle = {marginLeft: -35, marginBottom: -10, color:'#989DA2' }
  const additionalInfoIconStyle = {color:(strongPassword ? '#007D50' : '#906800')}

  return (
    <div className="input-text-container">
      {label ? <label className="input-text-label" >{label}</label> : null }
      <div >
        <input onChange={type === "password" ? passwordStrength : null} type={ passwordShown ? "text" : "password" } className={className} placeholder={placeholder} disabled={disabled}/>
        { passwordShown && type === 'password' ? <AiOutlineEye onClick={togglePassword} style={eyeStyle}/> : type === 'password' ? <AiOutlineEyeInvisible onClick={togglePassword} style={eyeStyle}/> : null}
      </div>
      <div className="additional-info-container">
        {strongPassword && type === 'password' ? <RiCheckboxCircleFill style = {additionalInfoIconStyle}/> : weakPassword && type === 'password'? <RiErrorWarningFill style = {additionalInfoIconStyle}/> : null}
        <div className={`additional-info${strongPassword ? ' additional-info-success' : weakPassword ? ' additional-info-warning' : ""}`}>{weakPassword || strongPassword ? passwordError : additionalInfo} </div>
      </div>
    </div>
  );
};

export default InputText;