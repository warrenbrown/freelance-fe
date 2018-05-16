import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProposalService } from '../proposal.service';
import { Proposal } from '../proposal';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

@Component({
  selector: 'app-proposal-show',
  templateUrl: './proposal-show.component.html',
  styleUrls: ['./proposal-show.component.css']
})
export class ProposalShowComponent implements OnInit {
  proposal: any;
  constructor(
    private route: ActivatedRoute,
    private proposalService: ProposalService
  ) { }

  ngOnInit() {
    const proposalRequest = this.route.params.mergeMap((params: Params) =>
      this.proposalService.getProposal(+params['id']));
    proposalRequest.subscribe(proposal => this.proposal = proposal);
  }

}
