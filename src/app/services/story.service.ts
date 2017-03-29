import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers, Request, RequestMethod } from '@angular/http';
import { Story } from '../models/model.story';
import { StoryPreview } from '../models/model.storyPreview';
import { CollectionComponent } from '../app.collection';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class StoryService {
  private anthologyServiceUrl = 'http://localhost:3001/api/';
  private selectedStory: Story;
  private subjectStory: Subject<Story> = new Subject<Story>();

  constructor(private http: Http) { }

  getStories(): Promise<Story[]> {
    return this.http.get(this.anthologyServiceUrl + 'stories').toPromise()
      .then(response => response.json() as Story[])
      .catch(this.handleError);
  }

  getCollections(): Promise<CollectionComponent[]> {

    return this.http.get(this.anthologyServiceUrl).toPromise()
      .then(response => response.json().collections as CollectionComponent[])
      .catch(this.handleError);
  }

  getThreadById(id): Promise<Story> {
    return this.http.get(this.anthologyServiceUrl + 'threads/' + id).toPromise()
      .then(response => response.json() as Story)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  setSelectedStory(story: Story): void {
    this.selectedStory = story;
    this.subjectStory.next(story);
    console.log('Selected story has been set');
  }

  getSelectedStory(): Observable<Story> {
    console.log('Returning selected story from service');
    return this.subjectStory.asObservable();
  }
}