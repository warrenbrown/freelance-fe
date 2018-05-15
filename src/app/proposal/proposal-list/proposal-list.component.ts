import { Component, OnInit } from '@angular/core';
import { Proposal } from '../proposal';

@Component({
  selector: 'app-proposal-list',
  templateUrl: './proposal-list.component.html',
  styleUrls: ['./proposal-list.component.css']
})
export class ProposalListComponent implements OnInit {
  proposalOne: Proposal = new Proposal(
    15, 'Abc Company', 'http://portfolio.warren.com', 'Ruby on Rails', 150, 120, 15, 'jordan@devamp.com'
  );
  proposalTwo: Proposal = new Proposal(
    16, 'Xyx Company', 'http://portfolio.warren.com', 'Ruby on Rails', 150, 120, 15, 'jordan@devamp.com'
  );
  proposalThree: Proposal = new Proposal(
    17, 'efg Company', 'http://portfolio.warren.com', 'Ruby on Rails', 150, 120, 15, 'jordan@devamp.com'
  );
  proposalFpur: Proposal = new Proposal(
    18, 'Something Company', 'http://portfolio.warren.com', 'Ruby on Rails', 150, 120, 15, 'jordan@devamp.com'
  );
  constructor() { }

  ngOnInit() {
  }

}
