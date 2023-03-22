import { Input } from 'components/input';
import React from 'react';
import { InputDataType } from '../form/types';

type PropsType = {
  inputData: InputDataType[];
  inputValue: { [key: string]: string };
  handleChange: (name: any, value: string) => void;
};

const Container = ({
  inputData,
  inputValue,
  handleChange,
}: PropsType): JSX.Element => (
  <>
    {inputData.map((item: InputDataType) => (
      <Input
        key={item.id}
        name={item.id}
        value={inputValue[item.id]}
        type={item.id}
        placeholder={item.label}
        label={item.label}
        onChange={handleChange}
        error={item.error}
      />
    ))}
  </>
);

export default Container;
