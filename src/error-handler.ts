import { StatusCodes } from 'http-status-codes';

export interface IErrorResponse {
  comingFrom: string;
  message: string;
  status: string;
  statusCode: number;
  serializeErrors(): IError;
}

export interface IError {
  comingFrom: string;
  message: string;
  status: string;
  statusCode: number;
}

export abstract class CustomError extends Error {
  abstract status: string;
  abstract statusCode: number;
  comingFrom: string;

  constructor(message: string, comingFrom: string) {
    super(message);

    this.comingFrom = comingFrom;
  }

  serializeErrors(): IError {
    return {
      comingFrom: this.comingFrom,
      message: this.message,
      status: this.status,
      statusCode: this.statusCode,
    };
  }
}

export class BadRequestError extends CustomError {
  status = 'error';
  statusCode = StatusCodes.BAD_REQUEST;

  constructor(message: string, comingFrom: string) {
    super(message, comingFrom);
  }
}

export class NotFoundError extends CustomError {
  status = 'error';
  statusCode = StatusCodes.NOT_FOUND;

  constructor(message: string, comingFrom: string) {
    super(message, comingFrom);
  }
}

export class NotAuthorizedError extends CustomError {
  status = 'error';
  statusCode = StatusCodes.UNAUTHORIZED;

  constructor(message: string, comingFrom: string) {
    super(message, comingFrom);
  }
}

export class FileTooLargeError extends CustomError {
  status = 'error';
  statusCode = StatusCodes.REQUEST_TOO_LONG;

  constructor(message: string, comingFrom: string) {
    super(message, comingFrom);
  }
}

export class ServerError extends CustomError {
  status = 'error';
  statusCode = StatusCodes.SERVICE_UNAVAILABLE;

  constructor(message: string, comingFrom: string) {
    super(message, comingFrom);
  }
}

export interface ErrnoException extends Error {
  code?: string;
  errno?: number;
  path?: string;
  stack?: string;
  syscall?: string;
}
