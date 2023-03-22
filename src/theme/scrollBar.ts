import { css } from 'styled-components';

export const scrollBar = css`
  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }): string => theme.colors.neutral4};
    border-radius: 20px;
  }
`;
