import React from 'react';
import classes from './Input.module.css'

const isInvalid = ({valid, touched, shouldValidate}) => {
  return !valid && touched && shouldValidate
}

const Input = props => {

  const inputType = props.type || 'text';
  const cls = [classes.Input];
  const htmlFor = `${inputType}-${Math.random()}`;

  /*if(isInvalid(props)){
    cls.push(classes.invalid);
  }*/

  return (
    <div className={cls.join(' ')}>
      <label htmlFor={htmlFor}>{props.label}</label>
      <input
        id={htmlFor}
        value={props.value}
        onChange={props.onChange}
        type={inputType}
      />
      {isInvalid(props)
        ? <span>{props.errorMessage || 'Введіть правильне значення'}</span>
        : null
      }
    </div>
  );
};

export default Input;