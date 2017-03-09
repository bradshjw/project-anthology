import { Injectable } from '@angular/core';

import { StoryComponent } from './app.story';
import storyData from './../data/stories';

@Injectable()
export class StoryService {

  getStories(): Promise<StoryComponent[]> {
    return Promise.resolve(storyData);
  }
}