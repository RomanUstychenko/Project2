import React from "react";
import scss from "./button.module.scss";
import { ButtonLoadMore, SearchFormButton, SearchFormButtonText } from "./button.styled";
// Визначаємо тип для пропсів компонента Button
interface ButtonProps {
  onClick: () => void;
}

export const Button: React.FC<ButtonProps> = ({ onClick }) => {

    // Внутрішня функція для обробки кліку і зняття фокуса
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      onClick(); // Викликати основний обробник події
      event.currentTarget.blur(); // Зняти фокус після кліку
    };
  return (
    <ButtonLoadMore 
      type="button" 
      onClick={handleClick}
    >
      Load More
    </ButtonLoadMore>
  );
};

// Визначаємо тип для пропсів компонента SubmitBnt
interface SubmitBntProps {
  text: string;
}

export const SubmitBnt: React.FC<SubmitBntProps> = ({ text }) => {
  return (
    <SearchFormButton 
      type="submit" 
    >
      <SearchFormButtonText
       >{text}</SearchFormButtonText>
    </SearchFormButton>
  );
};