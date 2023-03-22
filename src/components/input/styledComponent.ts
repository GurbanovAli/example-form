import styled, {
  css,
  FlattenInterpolation,
  ThemeProps,
} from 'styled-components';

const StyledPrimaryInput = css`
  border-color: ${({ theme }): string => theme.colors.tertiaryHover};
  transition: box-shadow ${({ theme }): string => theme.transition},
    border-color ${({ theme }): string => theme.transition};

  &:hover {
    border-color: ${({ theme }): string => theme.colors.secondary};
    box-shadow: ${({ theme }): string => theme.boxShadow};
  }

  &:focus-within {
    border: 2px solid ${({ theme }): string => theme.colors.emphasis};
  }

  &:active {
    border: 1px solid ${({ theme }): string => theme.colors.primary};
  }

  &:disabled {
    border-color: ${({ theme }): string => theme.colors.neutral5};
    color: ${({ theme }): string => theme.colors.neutral5};
  }
`;

const StyledWrapperError = css`
  border-color: ${({ theme }): string => theme.colors.errorContent2};
  color: ${({ theme }): string => theme.colors.errorContent2};
`;

const StyledInputError = css`
  color: ${({ theme }): string => theme.colors.errorContent2};
`;

export const StyledBlock = styled.div<{ isError?: boolean }>`
  margin: 22px;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 18px;
  color: ${({ theme }): string => theme.colors.neutral6};
  cursor: text;

  &:focus-within {
    color: ${({ isError }): (({ theme }: { theme: any }) => string) =>
      isError
        ? ({ theme }): string => theme.colors.neutral6
        : ({ theme }): string => theme.colors.emphasis};
  }

  &:disabled {
    color: ${({ theme }): string => theme.colors.neutral5};
  }
`;

export const StyledInputWrapper = styled.div<{ isError?: boolean }>`
  box-sizing: border-box;
  display: flex;
  height: 3.5rem;
  padding: 1rem 1rem 1rem 1.5rem;
  border: 1px solid ${({ theme }): string => theme.colors.tertiaryHover};
  border-radius: 0.5rem;

  svg {
    min-width: 14px;
  }

  ${({ isError }): FlattenInterpolation<ThemeProps<any>> =>
    isError ? StyledWrapperError : StyledPrimaryInput};
`;

export const StyledInput = styled.input<{ isError: boolean; color: string }>`
  width: 100%;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  border: none;

  color: ${({ color }): string => color};

  &:focus {
    outline: none;
  }

  ${({ isError }): false | FlattenInterpolation<ThemeProps<any>> =>
    isError && StyledInputError}
`;

export const StyledValidError = styled.label`
  margin-top: 2px;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  color: ${({ theme }): string => theme.colors.errorContent2};
`;

export const StyledValidErrorContainer = styled.div`
  height: 0;
`;
