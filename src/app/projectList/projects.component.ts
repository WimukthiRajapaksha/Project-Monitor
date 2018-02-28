import { Component, OnInit } from '@angular/core';
import {Project} from './projects';
import {ProjectService} from './projects.service';
import {Projects} from './allProjects';

declare interface ProjectData {
    headerRow: string[];
    dataRows: string[][];
}

@Component({
    selector: 'table-cmp',
    // moduleId: module.id,
    templateUrl: 'projects.component.html',
    styleUrls: ['./projects.component.css']
})

export class ProjectsComponent implements OnInit{
  selectedProject: Project;
  tables: Project[];
  // constructor(private allTables:ProjectService){}
  // ngOnInit() {
  //   this.getProjects();
  // }
  // onSelect(project: Project): void {
  //   this.selectedProject = project;
  // }
  //
  // getProjects(): void {
  //   this.allTables.getProjects()
  //       .subscribe(proj => this.tables = proj);
  // }
    public tableData1: Project;
    // public tableData2: ProjectData;
    ngOnInit() {

      this.tables = Projects;

      console.log(this.tables);
      console.log(this.tables[0]);
      // console.log(getOwnPropertyNames(Project));

        // this.tableData1 = Project
    // headerRow: ["project_ID","project_Name","weekly_Workload","number_Of_Members","state"];
        };
        // generateArray(obj){
        //   return Object.keys(obj).map((key)=>{ return obj[key]});
        // };
        // this.tableData2 = {
        //     headerRow: [ 'ID', 'Name',  'Salary', 'Country', 'City' ],
        //     dataRows: [
        //         ['1', 'Dakota Rice','$36,738', 'Niger', 'Oud-Turnhout' ],
        //         ['2', 'Minerva Hooper', '$23,789', 'Curaçao', 'Sinaai-Waas'],
        //         ['3', 'Sage Rodriguez', '$56,142', 'Netherlands', 'Baileux' ],
        //         ['4', 'Philip Chaney', '$38,735', 'Korea, South', 'Overland Park' ],
        //         ['5', 'Doris Greene', '$63,542', 'Malawi', 'Feldkirchen in Kärnten', ],
        //         ['6', 'Mason Porter', '$78,615', 'Chile', 'Gloucester' ]
        //     ]
        // };
    // }
}
