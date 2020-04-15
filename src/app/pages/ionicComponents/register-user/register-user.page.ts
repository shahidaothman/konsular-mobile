import { Component, OnInit } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.page.html',
  styleUrls: ['./register-user.page.scss'],
})
export class RegisterUserPage {
  requestObject: any = null
  constructor(private http: HTTP) {

  }

  getRequest() {
    this.http.get('https://jsonplaceholder.typicode.com/todos/1', {}, {})
      .then(res => this.requestObject = res.data)
      .catch(err => this.requestObject = err);

  }


}
