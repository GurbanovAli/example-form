import { AxiosError } from 'axios';

type ErrorHandlerType = (error: AxiosError) => void;

const noInternet = (): void => {
  throw new Error('No internet connection');
};

const errorHandler: ErrorHandlerType = () => new Error('User is unauthoried');

const errorConfig: { [id: number]: ErrorHandlerType } = {
  401: errorHandler,
  0: noInternet,
};

export const apiErrorHandler = async (error: AxiosError): Promise<void> => {
  const { request, response } = error;
  const statusCode: number = response?.status || request?.status;

  const handler = errorConfig[statusCode];

  handler?.(error);

  Promise.reject(error);
};
