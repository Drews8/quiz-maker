import React, {Component} from 'react';
import classes from './QuizCreator.module.css'
import Button from "../../components/UI/Button/Button";

class QuizCreator extends Component {
  submitHandler = event => {
    event.preventDefault();

  }

  addQuestionHandler = () => {

  }

  render() {
    return (
      <div className={classes.QuizCreator}>
        <div>
          <h1>Створення тесту</h1>
          <form onSubmit={this.submitHandler}>
            <input type="text"/>
            <hr/>
            <input type="text"/>
            <input type="text"/>
            <input type="text"/>
            <input type="text"/>

            <select></select>
            <Button
              type='primary'
              onClick={this.addQuestionHandler}
            >
              Додати питання
            </Button>
            <Button
              type='success'
              onClick={this.createQuizHandler}
            >
              Створити тест
            </Button>
          </form>
        </div>
      </div>
    );
  }
}

export default QuizCreator;