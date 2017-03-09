import { Component } from '@angular/core';

@Component({
  selector: 'app-story',
  templateUrl: './app.story.html',
  styleUrls: ['./app.component.css']
})
export class StoryComponent {
  _id: string;
  title: string;
  body: string;
  author: string;
}
