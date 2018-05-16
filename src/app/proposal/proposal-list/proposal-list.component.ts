import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProposalService } from '../proposal.service';
import { timer } from 'rxjs/observable/timer';
import { Proposal } from '../proposal';

@Component({
  selector: 'app-proposal-list',
  templateUrl: './proposal-list.component.html',
  styleUrls: ['./proposal-list.component.css']
})
export class ProposalListComponent implements OnInit {

  proposals: Proposal[];

  constructor(
    private proposalService: ProposalService,
    private router: Router
  ) { }

  ngOnInit() {
    const t = timer(0, 5000);
    t.subscribe(() => this.getProposals());
  }

  getProposals() {
    this.proposalService.getProposals().subscribe(proposals => {
      this.proposals = proposals;
    });
  }

  goToShow(proposal: Proposal): void {
    const link = ['/proposal', proposal.id];
    this.router.navigate(link);
  }

}
