import React from 'react';
import en from 'i18/en';
import Container from 'components/inputBlock/inputBlock';
import { useInputValue } from 'hooks/useInputValue';
import { ButtonType } from './types';
import { StyledButton, StyledForm } from './styledComponent';

const Form = (): JSX.Element => {
  const { inputData, inputValue, handleChange, handleRequire } =
    useInputValue();

  return (
    <StyledForm onSubmit={(e) => handleRequire(e)}>
      <Container
        inputData={inputData}
        inputValue={inputValue}
        handleChange={handleChange}
      />
      <StyledButton type={ButtonType.Submit}>{en.submit}</StyledButton>
    </StyledForm>
  );
};

export default Form;
