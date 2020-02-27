import React, {Component} from "react"
import classes from "./Quiz.module.css"
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";
import FinishedQuiz from "../../components/FinishedQuiz/FinishedQuiz";


class Quiz extends Component {
  state = {
    isFinished: false,
    activeQuestion: 0,
    answerState: null,
    quiz: [
      {
        question: "В якому році був створений JavaScript?",
        rightAnswerId: 3,
        id: 1,
        answers: [
          {text: '1998', id: 1},
          {text: '1993', id: 2},
          {text: '1995', id: 3},
          {text: '2000', id: 4}
        ]
      },
      {
        question: "Cкільки типів даних є в JS(ES6)?",
        rightAnswerId: 1,
        id: 2,
        answers: [
          {text: '7', id: 1},
          {text: '5', id: 2},
          {text: '6', id: 3},
          {text: '8', id: 4}
        ]
      }
    ]
  }

  onAnswerClickHandler = answerId => {
    if (this.state.answerState) {
      const key = Object.keys(this.state.answerState)[0];
      if (this.state.answerState[key] === "success") {
        return
      }
    }

    const currentQuestion = this.state.quiz[this.state.activeQuestion];
    console.log("current: ", currentQuestion.id);

    if (currentQuestion.rightAnswerId === answerId) {
      this.setState({
        answerState: {[answerId]: 'success'}
      })

      const timeout = window.setTimeout(() => {
        if (this.isQuizFinished()) {
          console.log("finished")
          this.setState({isFinished: true})
        } else {
          this.setState({
            activeQuestion: this.state.activeQuestion + 1,
            answerState: null
          })
        }
        window.clearTimeout(timeout);
      }, 1000)
    } else {
      this.setState({
        answerState: {[answerId]: 'error'}
      })
    }

  };

  isQuizFinished() {
    return this.state.activeQuestion + 1 === this.state.quiz.length;
  }


  render() {
    return (
      <div className={classes.Quiz}>
        <div className={classes.QuizWrapper}>
          <h1>World!</h1>
          {
            this.state.isFinished
              ? <FinishedQuiz

                />
              : <ActiveQuiz
                answers={this.state.quiz[this.state.activeQuestion].answers}
                question={this.state.quiz[this.state.activeQuestion].question}
                onAnswerClickHandler={this.onAnswerClickHandler}
                quizLength={this.state.quiz.length}
                answerNumber={this.state.activeQuestion + 1}
                state={this.state.answerState}
              />
          }

        </div>
      </div>
    )
  }
}

export default Quiz