import { Injectable } from '@angular/core';
import { Project } from './project';
import { PROJECTS } from './mock-projects';
import { Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import { MessageService } from './message.service';


@Injectable()
export class ProjectService {

  getProjects(): Observable<Project[]> {
    this.messageService.add('ProjectService: fetched projects');
    return of(PROJECTS);
  }

  constructor(private messageService: MessageService) { }

}
