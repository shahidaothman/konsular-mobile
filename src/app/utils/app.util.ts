import { environment } from 'src/environments/environment';

export class Logger {
  static log(data: any) {
    if (!environment.production) {
      console.log(data);
    }
  }

  static error(data: any) {
    if (!environment.production) {
      console.error(data);
    }
  }
}
