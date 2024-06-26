import React from "react";
import { QuestionType } from "../types";
import Question from "./Question";
import "./Category.css";

interface CategoryProps {
  title: string;
  questions: QuestionType[];
}

const Category: React.FC<CategoryProps> = ({ title, questions }) => {
  return (
    <div>
      <h2 className="category">{title}</h2>
      <div>
        {questions.map((question, index) => (
          <Question
            answer={question.answer}
            points={question.points}
            key={index}
            question={question.question}
          />
        ))}
      </div>
    </div>
  );
};

export default Category;
