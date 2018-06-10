import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { GithubSearcherModule } from "./github-searcher/github-searcher.module";

@NgModule({
  declarations: [AppComponent],
  imports: [GithubSearcherModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
