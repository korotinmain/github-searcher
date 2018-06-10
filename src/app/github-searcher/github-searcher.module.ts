import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatCardModule,
  MatInputModule,
  MatSelectModule,
  MatTableModule,
  MatToolbarModule
} from '@angular/material';
import { HttpModule } from '@angular/http';
import { GithubSearcherComponent } from './container/github-searcher/github-searcher.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { SearchComponent } from './components/search/search.component';
import { CardComponent } from './components/card/card.component';
import { ProfileService } from './profile.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatButtonModule,
    MatSelectModule,
    MatCardModule,
    MatToolbarModule,
    MatInputModule,
    MatTableModule
  ],
  exports: [GithubSearcherComponent],
  declarations: [
      GithubSearcherComponent,
      ToolbarComponent,
      SearchComponent,
      CardComponent
    ],
  providers: [ProfileService]
})
export class GithubSearcherModule {}
