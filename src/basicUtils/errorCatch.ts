import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
} from '@nestjs/common'
import { Request, Response } from 'express'
import { ApiException } from './ApiException '

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp()
    const response = ctx.getResponse<Response>()
    const request = ctx.getRequest<Request>()
    const status = exception.getStatus()
    //例如403这种，好像发不了，就需要这样进行判断看是否是自己创造的错误
    if (exception instanceof ApiException) {
      response.status(status).json({
        code: exception.getErrorCode(),
        path: request.url,
        message: exception.getErrorMessage(),
        timestamp: new Date().toISOString(),
      })
      return
    }

    response.status(status).json({
      code: status,
      path: request.url,
      message: exception.message,
      timestamp: new Date().toISOString(),
    })
  }
}
