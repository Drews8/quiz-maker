import React from "react";
import classes from "./FinishedQuiz.module.css"
import Button from "../UI/Button/Button";

const FinishedQuiz = props => {
  const successCount = Object.keys(props.results).reduce((total, key) => {
    if (props.results[key] === 'success') {
      total++;
    }
    return total;
  }, 0);
  return (
    <div className={classes.FinishedQuiz}>
      <ul>
        {props.quiz.map((quizItem, index) => {
          const cls = [
            'fa',
            props.results[quizItem.id] === 'success' ? 'fa-check ' + classes.success : 'fa-times ' + classes.error,

          ]
          return (
            <li
              key={index}
            >
              <i className={cls.join(' ')}></i>
              <strong> {index + 1}.&nbsp;</strong>
              {quizItem.question}
            </li>
          )
        })}
        {/*<li><i className={"fa fa-times " + classes.error}></i><strong> 1.&nbsp;</strong>Lorem ipsum dolor sit amet.</li>
        <li><i className={"fa fa-check " + classes.success}></i><strong> 2.&nbsp;</strong>Lorem ipsum dolor sit amet.</li>*/}

      </ul>
      <p>Правильних відповідей: {successCount} з {props.quiz.length}</p>
      <div>
        {/*<button onClick={props.onRetry}>Повторити</button>*/}
        <Button onClick={props.onRetry} type="primary">
          Повторити
        </Button>
        <Button type="success">
          Повернутись до списку тестів
        </Button>
      </div>
    </div>
  )
}

export default FinishedQuiz