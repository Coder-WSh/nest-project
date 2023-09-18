import { HttpException, HttpStatus } from '@nestjs/common'
import { ErrorCodes } from 'src/configs/errorCodes'
/**
 * 在原有的错误上可以定义一些自己的错误
 */
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
