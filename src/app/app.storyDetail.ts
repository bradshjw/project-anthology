import { Component, Input } from '@angular/core';
import { Story } from './models/model.story';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-story',
  templateUrl: './app.storyDetail.html',
  styleUrls: ['./app.component.css']
})
export class StoryDetail implements OnInit {
  @Input()
  story: Story;


  ngOnInit(): void {
    this.story = null;
  }
}
