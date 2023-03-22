export type InputDataType = {
  id: string;
  type: string;
  label: string;
  defaultValue?: string;
  required?: boolean;
  error?: boolean;
};

export type InputType = {
  inputData: InputDataType[];
};

export enum ButtonType {
  Submit = 'submit',
}
