import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ng-sw-problem';
  result: string;

  constructor(private _http: HttpClient) {}

  ngOnInit() {
    this._http.get('https://httpbin.org/redirect-to?url=https://httpbin.org/get', { observe: 'response' })
      .subscribe(response => this.result = response.url);
  }

}
