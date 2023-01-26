import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHelloString(): string {
    return 'Hello World!';
  }
}
