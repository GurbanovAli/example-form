import { ReactElement } from 'react';

export enum InputType {
  EMAIL = 'email',
  PASSWORD = 'password',
  TEXT = 'text',
}

export type PropsType<T> = {
  value: string;
  name: keyof T;
  type: string;
  placeholder: string;
  label: string;
  onChange: (field: keyof T, value: string) => void;
  disabled?: boolean;
  error?: boolean;
  icon?: ReactElement;
  color?: string;
  maxLength?: number;
  maxLengthOnPaste?: number;
};
