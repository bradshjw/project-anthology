import { Component, OnInit } from '@angular/core';
import { CollectionComponent } from './app.collection';
import { StoryDetail } from './app.storyDetail';
import { StoryService } from './services/story.service';

const _collections: CollectionComponent[] = [];

@Component({
  moduleId: module.id,
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./app.component.css'],
  providers: [StoryService]
})
export class DashboardComponent implements OnInit {
  collections: CollectionComponent[] = [];

  constructor(private storyService: StoryService) { }

  ngOnInit(): void {
    // this.storyService.getCollections()
    //   .then(collections => this.collections = collections.slice(0, 5));
    const col = new CollectionComponent(null);
    col.id = 12;
    col.name = 'Default';
    this.collections.push(col);

    const col2 = new CollectionComponent(null);
    col2.id = 13;
    col2.name = 'Custom';
    this.collections.push(col2);
  }
}