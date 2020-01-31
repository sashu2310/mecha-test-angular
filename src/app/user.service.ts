import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable()
export class UserService {
    token = localStorage['token'];
    headers = {
      'Content-Type': 'application/json',
      'token': this.token,
      'x-api-key': 'config.apikey'
    };
    options = { headers: this.headers };

    constructor(private http: HttpClient) { }

    viewPeers() {
        const _viewPeers = "https://mighty-thicket-25243.herokuapp.com/test/peers";
        return this.http.get<any>(_viewPeers, this.options);
    }
}
