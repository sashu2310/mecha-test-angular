import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class BlockService {
  token = localStorage['token'];
  headers = {
    'Content-Type': 'application/json',
    'token': this.token,
    'x-api-key': 'config.apikey'
  };
  options = { headers: this.headers };
  constructor(private http: HttpClient) { }

  addBlock(block) {
    const _addBlock = "https://mighty-thicket-25243.herokuapp.com/test/blockchain";
    return this.http.post<any>(_addBlock, block, this.options);
  }

  viewChain(id) {
    const _viewBlock = `http://localhost:5000/test/blockchain/${id}`;
    
    return this.http.get<any>(_viewBlock, this.options);
  }
}
