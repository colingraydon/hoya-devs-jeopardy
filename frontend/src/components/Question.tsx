import React from "react";
import "./Question.css";

interface QuestionProps {
  points: number;
  question: string;
  answer: string;
}

const Question: React.FC<QuestionProps> = ({ points, question, answer }) => {
  const [isBeingAnswered, setIsBeingAnswered] = React.useState(false);
  const [answered, setAnswered] = React.useState(false);

  const handleClick = () => {
    if (answered) return;
    if (isBeingAnswered) {
      setIsBeingAnswered(false);
      setAnswered(true);
      return;
    }
    setIsBeingAnswered(true);
  };

  if (answered) return <div className="question">{answer}</div>;
  if (isBeingAnswered)
    return (
      <div className="question" onClick={handleClick}>
        {question}
      </div>
    );

  return (
    <div className="question" onClick={handleClick}>
      {points}
    </div>
  );
};

export default Question;
