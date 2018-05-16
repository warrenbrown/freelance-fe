import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

import { DocumentsComponent } from './documents/documents.component';
import { DocumentService } from './documents/document.service';

import { ProposalComponent } from './proposal/proposal.component';
import { ProposalListComponent } from './proposal/proposal-list/proposal-list.component';
import { ProposalNewComponent } from './proposal/proposal-new/proposal-new.component';
import { ProposalShowComponent } from './proposal/proposal-show/proposal-show.component';
import { ProposalService } from './proposal/proposal.service';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    NavBarComponent,
    DocumentsComponent,
    ProposalComponent,
    ProposalListComponent,
    ProposalNewComponent,
    ProposalShowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [ DocumentService, ProposalService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
