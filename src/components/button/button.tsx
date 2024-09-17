import React from "react";
import scss from "./button.module.scss";

// Визначаємо тип для пропсів компонента Button
interface ButtonProps {
  onClick: () => void;
}

export const Button: React.FC<ButtonProps> = ({ onClick }) => {
  return (
    <button 
      className={scss.ButtonLoadMore}
      type="button" 
      onClick={onClick}
    >
      Load More
    </button>
  );
};

// Визначаємо тип для пропсів компонента SubmitBnt
interface SubmitBntProps {
  text: string;
}

export const SubmitBnt: React.FC<SubmitBntProps> = ({ text }) => {
  return (
    <button 
      type="submit" 
      className={scss.SearchFormButton}
    >
      <span
       className={scss.SearchFormButtonLabel}
       >{text}</span>
    </button>
  );
};