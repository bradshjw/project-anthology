import { Component, Input } from '@angular/core';
import { StoryComponent } from './app.story';
import { StoryService } from './story.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-story-collection',
  templateUrl: './app.collection.html',
  styleUrls: ['./app.component.css'],
  providers: [StoryService]
})
export class CollectionComponent implements OnInit {
  id: number;
  name: string;
  @Input()
  selectedStory: StoryComponent;
  stories: StoryComponent[];

  constructor(private storyService: StoryService) {

  }

  ngOnInit(): void {
    this.getStories();
  }

  onSelect(story: StoryComponent): void {
    this.selectedStory = story;
  }

  getStories(): void {
    this.storyService.getStories().then(stories => this.stories = stories);
  }
}
