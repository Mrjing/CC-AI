import { ArgumentsHost, Catch, ExceptionFilter, HttpException, HttpStatus, Logger } from '@nestjs/common';
import { formatDate } from '@/common/utils/date';
import { Result } from '@/common/result';

@Catch()
export class AllExceptionsFilter<T> implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    console.log('exception', exception.initMessage, exception.message, exception.name)
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();
    let exceptionRes
    if (typeof exception?.getResponse === 'function') {
      exceptionRes = exception.getResponse()
    } else {
      exceptionRes = 'inter server error'
    }
    console.log('exceptionRes', exceptionRes)
    const message = exceptionRes?.message ? (Array.isArray(exceptionRes) ? exceptionRes['message'][0] : exceptionRes['message']) : exceptionRes;
    const statusCode = exception.getStatus() || 400;
    const status = exception instanceof HttpException ? exception.getStatus() : HttpStatus.INTERNAL_SERVER_ERROR;
    response.status(status);
    response.header('Content-Type', 'application/json; charset=utf-8');
    response.send(Result.fail(statusCode, Array.isArray(message) ? message[0] : message));
  }
}
