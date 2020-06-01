import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from 'src/app/interfaces/app.interface';
import { UisService } from '../uis/uis.service';

@Injectable({
  providedIn: 'root',
})
export class GlobalService {
  private authorization = new BehaviorSubject<boolean>(false);
  private user = new BehaviorSubject<User | null>(null);
  private token = new BehaviorSubject<string>('');
  public readonly getAuthorization = this.authorization.asObservable();
  public readonly getUser = this.user.asObservable();
  public readonly getToken = this.token.asObservable();

  constructor(private uisService: UisService) {}

  public set setAuthorization(flag: boolean) {
    localStorage.setItem('authorization', `${flag}`);
    this.authorization.next(flag);
  }

  public set setUser($: User) {
    localStorage.setItem('user', JSON.stringify($));
    this.user.next($);
  }

  public set setToken($: string) {
    localStorage.setItem('token', $);
    this.token.next($);
  }

  /**
   * use to verify the file size
   * @param evt html dom event
   * @param size default 200kb
   */
  public verifyFileSize(evt: any, size = 200): boolean {
    const sizeInKb = evt.target.files[0].size / 1024;
    if (sizeInKb >= size) {
      this.uisService
        .presentAlert(
          'File size must be less than 200kb. Please try again.',
          'Error'
        )
        .finally();
      return false;
    }
    return true;
  }
}
