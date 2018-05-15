import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { DocumentsComponent } from './documents/documents.component';
import { ProposalComponent } from './proposal/proposal.component';
import { ProposalListComponent } from './proposal/proposal-list/proposal-list.component';
import { ProposalNewComponent } from './proposal/proposal-new/proposal-new.component';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    NavBarComponent,
    DocumentsComponent,
    ProposalComponent,
    ProposalListComponent,
    ProposalNewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
