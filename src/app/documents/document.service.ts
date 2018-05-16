import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Document } from './document';

@Injectable()
export class DocumentService {
  private documentsUrl = 'http://localhost:3000/freelance_documents';
  constructor(private http: Http) { }

  getDocuments() {
    return this.http.get(this.documentsUrl).map( res => res.json());
  }
}
