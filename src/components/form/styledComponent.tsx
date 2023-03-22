import styled from 'styled-components';

export const StyledForm = styled.form`
  width: 50%;
  margin: 10% auto;
`;

export const StyledButton = styled.button`
  min-height: 48px;
  margin: 12px auto;
  padding: 14px 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  border: 2px solid;
  color: ${({ theme }): string => theme.colors.textMain};
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  box-sizing: border-box;
  transition: background-color ${({ theme }): string => theme.transition},
    border-color ${({ theme }): string => theme.transition};

  &:disabled {
    cursor: default;
  }
`;
