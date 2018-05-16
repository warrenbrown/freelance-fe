import { Component, OnInit } from '@angular/core';
import { Proposal } from '../proposal';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProposalService } from '../proposal.service';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-proposal-new',
  templateUrl: './proposal-new.component.html',
  styleUrls: ['./proposal-new.component.css']
})
export class ProposalNewComponent implements OnInit {
  proposal = new Proposal;
  submitted = false;
  constructor(private proposalService: ProposalService) { }

  ngOnInit() {
  }

  createProposal(proposal) {
    this.submitted = true;
    this.proposalService.createProposal(proposal).subscribe(data => {
    return true;
  },
    error => {
      console.log('error creating proposal');
    });
  }
}
