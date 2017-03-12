import { Component, Input } from '@angular/core';
import { StoryPreview } from './models/model.storyPreview';
import { Story } from './models/model.story';
import { StoryService } from './services/story.service';
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
  selectedStory: Story;
  storyPreviews: StoryPreview[];

  constructor(private storyService: StoryService) {

  }

  ngOnInit(): void {
    this.getStories();
  }

  onSelect(story: StoryPreview): void {
    console.log("Story " + story.id + " was selected");
    this.storyService.getThreadById(story.id).then(fullStory => {
      this.selectedStory = fullStory;
      console.log(fullStory);
    });
  }

  getStories(): void {
    this.storyService.getStories().then(stories => this.storyPreviews = stories);
  }
}
