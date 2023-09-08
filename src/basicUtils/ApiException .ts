import { HttpException, HttpStatus } from '@nestjs/common'
import { ErrorCodes } from 'src/configs/errorCodes'
ErrorCodes

export class ApiException extends HttpException {
  private errorMessage: string
  private errorCode: ErrorCodes

  constructor(
    errorMessage: string,
    errorCode: ErrorCodes,
    statusCode: HttpStatus = HttpStatus.OK,
  ) {
    super(errorMessage, statusCode)
    this.errorMessage = errorMessage
    this.errorCode = errorCode
  }

  getErrorCode(): ErrorCodes {
    return this.errorCode
  }

  getErrorMessage(): string {
    return this.errorMessage
  }
}
