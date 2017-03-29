import { Component, Input } from '@angular/core';
import { Story } from './models/model.story';
import { OnInit } from '@angular/core';
import { StoryService } from './services/story.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-story',
  templateUrl: './app.storyDetail.html',
  styleUrls: ['./app.component.css']
})
export class StoryDetail implements OnInit {
  story: Story;

  constructor(private service: StoryService) { }

  ngOnInit(): void {
    this.service.getSelectedStory().subscribe((selectedStory: Story) => {
      console.log('Story retrieved');
      this.story = selectedStory;
    });
  }
}
