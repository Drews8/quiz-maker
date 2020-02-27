import React from "react";
import classes from "./ActiveQuiz.module.css"
import AnswersList from "../AnswersList/AnswersList";

const ActiveQuiz = props => {


  return (
    <div className={classes.ActiveQuiz}>
      <p>{props.answerNumber} from {props.quizLength}</p>
      <h2>{props.question}</h2>
      <AnswersList
        state={props.state}
        answers={props.answers}
        onAnswerClickHandler={props.onAnswerClickHandler}
      />
    </div>
  )
}

export default ActiveQuiz;
