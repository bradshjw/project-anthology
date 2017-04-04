import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AnthologyComponent } from './anthology.component';
import { CollectionComponent } from './app.collection';
import { StoryDetail, SafeHtmlPipe } from './app.storyDetail';
import { DashboardComponent } from './dashboard.component';
import { StoryService } from './services/story.service';

@NgModule({
  declarations: [
    AppComponent,
    CollectionComponent,
    AnthologyComponent,
    DashboardComponent,
    StoryDetail,
    SafeHtmlPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      // {
      //   path: 'collections',
      //   component: AnthologyComponent
      // },
      // {
      //   path: 'dashboard',
      //   component: DashboardComponent
      // },
      {
        path: '',
        redirectTo: '/',
        pathMatch: 'full'
      }
    ])
  ],
  providers: [StoryService],
  bootstrap: [AppComponent]
})


export class AppModule { }
