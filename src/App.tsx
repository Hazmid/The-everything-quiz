import React, { useState } from 'react';
import { fetchQuizQuestions } from './API';
//components
import QuestionCard from './Components/QuestionCard';
//types
import { QuestionState, Difficulty } from './API';
//styles
import { GlobalStyle, Wrapper } from './App.styles'

export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
}


const TOTAL_QUESTIONS = 10;
let category = "9";

function App() {

    // SKOOH WONK I
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);  //specified for typeScript that the empty array is going to be <QuestionState[]>
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);




  function getCategory (this: HTMLSelectElement) {
   var e = (document.getElementById("category")) as HTMLSelectElement
    var sel = e.selectedIndex;
    var opt = e.options[sel];
    var CurValue = (opt).value;
    //console.log(CurValue);
    
    category = CurValue;

  }


  //snoitcnuf eht

  const startTrivia = async () => {
    setLoading(true);
    setGameOver(false);

    const newQuestions = await fetchQuizQuestions(
      TOTAL_QUESTIONS, 
      Difficulty.MEDIUM,
      category
    );

    setQuestions(newQuestions);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);
  };

  
  
  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameOver) {
      //user answer // added value={answer} on answer button
      const answer = e.currentTarget.value;
      //compare selected answer
      const correct = questions[number].correct_answer === answer;
      //add score if correct
      if (correct) setScore(prev => prev + 1);

      //save answer in array for user answers
      const answerObject = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer,
      };

      setUserAnswers((prev) => [...prev, answerObject]);
    }
  };


  const nextQuestion = () => {
    //move on to the next question if not the last question
    const nextQuestion = number + 1;

    if (nextQuestion === TOTAL_QUESTIONS) {
      setGameOver(true);
      setLoading(true);
    } else {
      setNumber(nextQuestion);
    }
  };


  return (
    <>
      <GlobalStyle />
      <Wrapper >
        <h1>The Everything Quiz </h1>
        {gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
        <div className="div1">
          <div className="div2">
            <label htmlFor="label">Choose a Category: </label>
            <select name="category" id="category" onChange={getCategory}>
              <option value="9">General Knowledge</option>
              <option value="11">Film</option>
              <option value="14">Television</option>
              <option value="17">Science and Nature</option>
              <option value="18">Computers</option>
              <option value="20">Mythology</option>
              <option value="21">Sports</option>
              <option value="23">History</option>
              <option value="24">Politics</option>
              <option value="25">Art</option>
              <option value="29">Comics</option>
              <option value="31">Anime</option>
            </select>
          </div>
          <button className="start" onClick={startTrivia}>
            Start
          </button>
        </div>
        ) : null}
        {!gameOver ? <p className="score">Score: {score}</p> : null}
        {loading && <p>Loading Questions ...</p>}
        {!loading && !gameOver && (
          <QuestionCard
            questionNr={number + 1}
            totalQuestions={TOTAL_QUESTIONS}
            question={questions[number].question}
            answers={questions[number].answers}
            userAnswer={userAnswers ? userAnswers[number] : undefined}
            callback={checkAnswer}
          />
        )}
        {!gameOver &&
        !loading &&
        userAnswers.length === number + 1 &&
        number !== TOTAL_QUESTIONS - 1 ? (
          <button className="next" onClick={nextQuestion}>
            Next Question
          </button>
        ) : null}
      </Wrapper>
    </>
  );
}



export default App;




//userAnswers.length === number + 1
//when the player has started selecting answers

//<></>
//fragment