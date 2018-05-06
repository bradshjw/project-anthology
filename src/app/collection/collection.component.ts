import { Component, Input, OnInit } from '@angular/core';
import { StoryPreview } from '../models/story-preview';
import { Story } from '../models/story';
import { StoryService } from '../services/story.service';

@Component({
  selector: 'app-story-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['../app.component.css']
})
export class CollectionComponent implements OnInit {
  id: number;
  name: string;
  selectedStory: Story;
  storyPreviews: Story[];

  constructor(private storyService: StoryService) {

  }

  ngOnInit(): void {
    this.getStories();
  }

  onSelect(fullStory: Story): void {
    // if a story is already selected, let's mark it read before 
    // resetting it
    if (this.selectedStory) {
      this.selectedStory.read = true;
      const selectedPreview = this.storyPreviews.filter(myObj => myObj.messageId === this.selectedStory.messageId)[0];
      if (selectedPreview) {
        console.log('Updating preview story: ' + this.selectedStory);
        selectedPreview.read = true;
      }
    }

    this.selectedStory = fullStory;
    this.storyService.setSelectedStory(fullStory);

    // this.storyService.getThreadById(story.id).then(fullStory => {
    //   console.log('Full story retrieved: ' + fullStory);



    // });
  }

  getStories(): void {
    this.storyService.getStories().then(stories => this.storyPreviews = stories);
  }
}
