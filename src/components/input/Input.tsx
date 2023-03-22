import React, { ChangeEvent, useRef } from 'react';
import { InputType, PropsType } from './types';

import {
  StyledInput,
  StyledInputWrapper,
  StyledBlock,
  StyledValidError,
  StyledValidErrorContainer,
} from './styledComponent';

export const Input = <T,>({
  value,
  name,
  type = InputType.TEXT,
  placeholder,
  label,
  onChange,
  disabled = false,
  error,
  icon,
  color = '#000000',
  maxLength,
}: PropsType<T>): JSX.Element => {
  const input = useRef<HTMLInputElement | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    onChange(name, e.target.value);
  };

  return (
    <StyledBlock isError={error}>
      {label}
      <StyledInputWrapper isError={error}>
        {icon}
        <StyledInput
          ref={input}
          color={color}
          type={type}
          placeholder={placeholder}
          disabled={disabled}
          isError={error as any}
          value={value}
          maxLength={maxLength}
          autoComplete={type === InputType.PASSWORD ? 'on' : 'off'}
          onChange={handleChange}
        />
      </StyledInputWrapper>
      <StyledValidErrorContainer>
        {error && <StyledValidError>{error}</StyledValidError>}
      </StyledValidErrorContainer>
    </StyledBlock>
  );
};
