import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';
import { AttributionComponent } from './article/attribution/attribution.component';
import { TextEditorComponent } from './article/text-editor/text-editor.component';
import { ClickToRevealDirective } from './directives/click-to-reveal.directive';
import { AdSectionComponent } from './article/ad-section/ad-section.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { FeedbackComponent } from './article/feedback/feedback.component';
import { BgDirective } from './directives/class.directive';


@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    AttributionComponent,
    TextEditorComponent,
    ClickToRevealDirective,
    AdSectionComponent,
    ArticleListComponent,
    FeedbackComponent,
    BgDirective,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
