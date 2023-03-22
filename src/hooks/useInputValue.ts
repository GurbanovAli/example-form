import { InputDataType } from 'components/form/types';
import { FormEvent, useCallback, useMemo, useState } from 'react';
import data from 'data.json';

type ReturnType = {
  inputData: InputDataType[];
  inputValue: { [key: string]: string };
  handleChange: (name: any, value: string) => void;
  handleRequire: (event: FormEvent<HTMLFormElement>) => void;
};

export const useInputValue = (): ReturnType => {
  const [inputData, setInputData] = useState<InputDataType[]>(data);
  const initialInputValue: { [key: string]: string } = {};

  useMemo(() => {
    /* eslint-disable-next-line */
    for (const key of inputData) {
      if (key.defaultValue) {
        initialInputValue[key.id] = key.defaultValue;
      } else {
        initialInputValue[key.id] = '';
      }
    }
    return initialInputValue;
  }, []);

  const [inputValue, setInputValue] =
    useState<{ [key: string]: string }>(initialInputValue);

  const handleChange = useCallback(
    (name: any, value: string): void => {
      const newInputValue = {
        ...inputValue,
        [name]: value,
      };
      setInputValue(newInputValue);
    },
    [inputValue]
  );

  const handleRequire = useCallback(
    (event: FormEvent<HTMLFormElement>): void => {
      const requireInputValue = inputData.map(
        (item: InputDataType): InputDataType => {
          if (item.required) {
            /* eslint-disable-next-line */
            for (const key in inputValue) {
              if (key === item.id && !inputValue[key]) {
                item.error = true;
              }

              if (key === item.id && inputValue[key] && item.error) {
                item.error = false;
              }
            }
          }
          return item;
        }
      );

      const requiredInput = requireInputValue.find(
        (item) => item.error === true
      );
      setInputData(requireInputValue);

      if (requiredInput) {
        event.preventDefault();
      } else {
        console.log(inputValue);
      }
    },
    [inputValue]
  );

  return {
    inputData,
    inputValue,
    handleChange,
    handleRequire,
  };
};
