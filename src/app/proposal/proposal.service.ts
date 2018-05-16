import { Injectable } from '@angular/core';
import { Proposal } from './proposal';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ProposalService {
  private proposalsUrl = 'http://localhost:3002/proposals';
  constructor(private http: Http) { }

  getProposals() {
    return this.http.get(this.proposalsUrl).map( res => res.json());
  }

  getProposal(id: number) {
    return this.http.get(this.proposalsUrl + '/' + id).map( res => res.json());
  }

  createProposal(proposal) {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });
    return this.http.post(this.proposalsUrl + '/', JSON.stringify(proposal), { headers: headers})
      .map( res => res.json());
  }

}
