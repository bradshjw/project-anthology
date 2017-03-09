import { Component } from '@angular/core';
import { StoryComponent } from './app.story';
import { CollectionComponent } from './app.collection';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Project Anthology';
  collection: CollectionComponent;
  selectedStory: StoryComponent;
}
