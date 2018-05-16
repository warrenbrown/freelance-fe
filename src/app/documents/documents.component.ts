import { Component, OnInit } from '@angular/core';
import { Document } from './document';
import { timer } from 'rxjs/observable/timer';
import { DocumentService } from './document.service';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent implements OnInit {
  pageTitle = 'Document Dashboard';
  documents: Document[];

  constructor(private documentService: DocumentService) { }

  ngOnInit() {
    const t = timer(0, 5000);
    t.subscribe(() => this.getDocuments());
  }

  getDocuments() {
    this.documentService.getDocuments().subscribe(documents => {
      this.documents = documents;
    });
  }

}
