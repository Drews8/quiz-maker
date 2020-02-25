import React from "react";
import classes from "./ActiveQuiz.module.css"
import AnswersList from "../AnswersList/AnswersList";

const ActiveQuiz = props => {
  return (
    <div className={classes.ActiveQuiz}>
      <p>2 from 12</p>
      <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, voluptate?</h2>
      <AnswersList
        answers={props.answers}
      />
    </div>
  )
}

export default ActiveQuiz;
