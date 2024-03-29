import { Component, Input, Pipe, PipeTransform } from '@angular/core';
import { Story } from '../models/story';
import { OnInit } from '@angular/core';
import { StoryService } from '../services/story.service';
import { Observable } from 'rxjs/Observable';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({ name: 'safeHtml' })
export class SafeHtmlPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) { }

  transform(html) {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }
}

@Component({
  selector: 'app-story',
  templateUrl: './story-detail.component.html',
  styleUrls: ['../app.component.css']
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
