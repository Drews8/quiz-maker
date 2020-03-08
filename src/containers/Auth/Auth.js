import React, {Component} from 'react';
import classes from './Auth.module.css'
import Button from "../../components/UI/Button/Button";
import Input from "../../components/UI/Input/Input";

class Auth extends Component {
  loginHandler = () => {

  }

  registerHandler = () => {

  }

  submitHandler = event => {
    event.preventDefault();
  }

  render() {
    return (
      <div className={classes.Auth}>
        <div>
          <h1>Авторизація</h1>
          <form onSubmit={this.submitHandler} className={classes.AuthForm}>

            <Input
              label='Email'
            />
            <Input
              label='Пароль'
              errorMessage='gefwef'
            />
            <Button
              onClick={this.loginHandler}
              type='success'
            >
              Ввійти
            </Button>
            <Button
              onClick={this.registerHandler}
              type='primary'
            >
              Зареєструватись
            </Button>
          </form>
        </div>
      </div>
    );
  }
}

export default Auth;