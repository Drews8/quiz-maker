import React from "react";
import classes from "./FinishedQuiz.module.css"

const FinishedQuiz = props => {
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
      <p>Правильних відповідей: 1 з 2</p>
      <div>
        <button>Повторити</button>
      </div>
    </div>
  )
}

export default FinishedQuiz