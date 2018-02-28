import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Project } from './projects';
import { Projects } from './allProjects';
import { MessageService } from './projectsMessage.service';

@Injectable()
export class ProjectService {

  constructor(private messageService: MessageService) { }

  getProjects(): Observable<Project[]> {
    // Todo: send the message _after_ fetching the heroes
    // this.messageService.add('HeroService: fetched heroes');
    return of(Projects);
  }
}


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
