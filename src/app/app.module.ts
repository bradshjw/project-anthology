import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AnthologyComponent } from './anthology/anthology.component';
import { CollectionComponent } from './collection/collection.component';
import { StoryDetail, SafeHtmlPipe } from './story-detail/story-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
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
