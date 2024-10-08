import { get } from 'lodash';

export const ERROR_CODE = {
  400: 'Bad Request',
  401: 'Unauthorized',
  403: 'Forbidden',
  404: 'Not Found',
  500: 'Internal Server Error',
};

const ERROR_MESSAGES = {
  400: 'The server could not understand the request due to invalid syntax.',
  401: 'The client must authenticate itself to get the requested response.',
  403: 'The client does not have access rights to the content.',
  404: 'The server can not find the requested resource.',
  500: 'The server has encountered a situation it does not know how to handle.',
};

export const getErrorMessage = (statusCode: string | undefined): string =>
  get(ERROR_MESSAGES, `${statusCode}`);
