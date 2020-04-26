import React, {Component} from 'react';
import classes from './Auth.module.css'
import Button from "../../components/UI/Button/Button";
import Input from "../../components/UI/Input/Input";
import is from 'is_js'
import {connect} from "react-redux";
import {auth} from "../../store/actions/auth";

class Auth extends Component {
  state = {
    isFormValid: false,
    formControls: {
      email: {
        value: '',
        type: 'email',
        label: 'Email',
        errorMessage: 'Введіть правильний email',
        valid: false,
        touched: false,
        validation: {
          required: true,
          email: true,
        }
      },
      password: {
        value: '',
        type: 'password',
        label: 'Пароль',
        errorMessage: 'Введіть правильний пароль',
        valid: false,
        touched: false,
        validation: {
          required: true,
          minLength: 6,
        }
      },
    }
  }
  loginHandler = () => {
    this.props.auth(
      this.state.formControls.email.value,
      this.state.formControls.password.value,
      true
    )

    /*try {
      const response = await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAF7maRGKWO-xf6a4DUmBH3715O_i_7EDc', authData)
      console.log(response.data)
    } catch (e) {
      console.log(e);
    }*/
  }

  registerHandler = () => {
    this.props.auth(
      this.state.formControls.email.value,
      this.state.formControls.password.value,
      false
    )
  }

  submitHandler = event => {
    event.preventDefault();
  }

  validateControl = (value, validation) => {
    if (!validation) return true;

    let isValid = true;
    if (validation.required) {
      isValid = value.trim() !== '' && isValid
    }
    if (validation.email) {
      isValid = is.email(value) && isValid;
    }
    if (validation.minLength) {
      isValid = value.length >= validation.minLength && isValid
    }
    return isValid;
  }

  onChangeHandler = (event, controlName) => {
    const formControls = {...this.state.formControls};
    const control = {...formControls[controlName]};

    control.value = event.target.value;
    control.touched = true;
    control.valid = this.validateControl(control.value, control.validation);

    formControls[controlName] = control;

    let isFormValid = true;
    Object.keys(formControls).forEach(name => {
      isFormValid = formControls[name].valid && isFormValid
    })
    this.setState({
      formControls,
      isFormValid
    })
  }

  renderInputs() {
    return Object.keys(this.state.formControls).map((controlName, index) => {
      const control = this.state.formControls[controlName]
      return (
        <Input
          key={controlName + index}
          label={control.label}
          type={control.type}
          value={control.value}
          valid={control.valid}
          touched={control.touched}
          shouldValidate={!!control.validation}
          errorMessage={control.errorMessage}
          onChange={event => this.onChangeHandler(event, controlName)}
        />
      )
    })
  }

  render() {
    return (
      <div className={classes.Auth}>
        <div>
          <h1>Авторизація</h1>
          <form onSubmit={this.submitHandler} className={classes.AuthForm}>
            {this.renderInputs()}
            <Button
              onClick={this.loginHandler}
              type='success'
              disabled={!this.state.isFormValid}
            >
              Ввійти
            </Button>
            <Button
              onClick={this.registerHandler}
              type='primary'
              disabled={!this.state.isFormValid}
            >
              Зареєструватись
            </Button>
          </form>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    auth: (email, password, isLogin) => dispatch(auth(email, password, isLogin))
  }
}

export default connect(null, mapDispatchToProps)(Auth);