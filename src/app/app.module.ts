import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';
import { AttributionComponent } from './article/attribution/attribution.component';
import { TextEditorComponent } from './article/text-editor/text-editor.component';
import { ClickToRevealDirective } from './directives/click-to-reveal/click-to-reveal.directive';
import { AdSectionComponent } from './article/ad-section/ad-section.component';


@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    AttributionComponent,
    TextEditorComponent,
    ClickToRevealDirective,
    AdSectionComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
