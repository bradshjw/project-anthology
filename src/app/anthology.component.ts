import { Component } from '@angular/core';
import { Story } from './models/model.story';
import { CollectionComponent } from './app.collection';

@Component({
  selector: 'app-anthology',
  templateUrl: './anthology.component.html',
  styleUrls: ['./app.component.css']
})
export class AnthologyComponent {
  collection: CollectionComponent;
  selectedStory: Story;
}
