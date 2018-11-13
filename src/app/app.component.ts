import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-sw-problem';
  result: Object;

  constructor(private _http: HttpClient) {}

  requestData() {
    this._http.post('https://httpbin.org/post', '{ "myData": "example" }').subscribe(data => this.result = data);
  }

}

