import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class BlockService {
  token = localStorage['token'];
  headers = {
    'Content-Type': 'application/json',
    'token': this.token,
    'x-api-key': 'BJIPIDuWMR3qK6lzQgYQmjNq7eh8QpR6BofUeYIDGBEx'
  };
  options = { headers: this.headers };
  constructor(private http: HttpClient) { }

  addBlock(block) {
    const _addBlock = "https://mighty-thicket-25243.herokuapp.com/test/blockchain";
    return this.http.post<any>(_addBlock, block, this.options);
  }

  viewChain(id) {
    console.log(this.options);
    const _viewBlock = `https://mighty-thicket-25243.herokuapp.com/test/blockchain/${id}`;
    return this.http.get<any>(_viewBlock, this.options);
  }
}
