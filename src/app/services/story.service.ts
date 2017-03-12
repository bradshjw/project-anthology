import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers, Request, RequestMethod } from '@angular/http';
import { Story } from '../models/model.story';
import { StoryPreview } from '../models/model.storyPreview';
import { CollectionComponent } from '../app.collection';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class StoryService {
  private anthologyServiceUrl = 'http://localhost:3001/api/';

  constructor(private http: Http) { }

  getStories(): Promise<StoryPreview[]> {
    return this.http.get(this.anthologyServiceUrl + 'mail').toPromise()
      .then(response => response.json().threads as StoryPreview[])
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
}