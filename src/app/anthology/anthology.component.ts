import { Component } from '@angular/core';
import { Story } from '../models/story';
import { CollectionComponent } from '../collection/collection.component';

@Component({
  selector: 'app-anthology',
  templateUrl: './anthology.component.html',
  styleUrls: ['../app.component.css']
})
export class AnthologyComponent {
  collection: CollectionComponent;
  selectedStory: Story;
}
