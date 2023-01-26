import {
  CallHandler,
  ExecutionContext,
  Injectable,
  Logger,
  NestInterceptor,
} from '@nestjs/common';
import { map, Observable, tap } from 'rxjs';

@Injectable()
export class SuccessInterceptor implements NestInterceptor {
  private logger = new Logger();
  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> | Promise<Observable<any>> {
    const now = Date.now();

    return next.handle().pipe(
      map((data) => ({
        success: true,
        data,
      })),
    );
  }
}
