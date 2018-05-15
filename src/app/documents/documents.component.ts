import { Component, OnInit } from '@angular/core';
import { Document } from './document';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent implements OnInit {
  pageTitle = 'Document Dashboard';
  documents: Document[] = [
    {
      title: 'Title1',
      description: 'Desc1',
      file_url: 'File1',
      updated_at: '04/13/2018',
      image_url: 'http//:google.com',
    },
    {
      title: 'New Titel',
      description: 'New Desc1',
      file_url: 'File1',
      updated_at: '04/13/2018',
      image_url: 'http//:google.com',
    },
    {
      title: 'Title3',
      description: 'Desc13',
      file_url: 'File3',
      updated_at: '04/13/2018',
      image_url: 'http//:google.com',
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
