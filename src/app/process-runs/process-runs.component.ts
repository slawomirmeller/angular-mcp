import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ProcessRun, processRuns} from "../process-run";
@Component({
  selector: 'app-process-runs',
  templateUrl: './process-runs.component.html',
  styleUrls: ['./process-runs.component.css']
})
export class ProcessRunsComponent implements OnInit{

  processRuns: ProcessRun[] = processRuns;
  runs: ProcessRun[] | undefined;
  processCode: string | undefined;

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    this.processCode = String(routeParams.get('processCode'));
    console.log("Open process code", this.processCode);
    this.runs = this.processRuns.filter(row => row.code == this.processCode);
  }


  constructor(
    private route: ActivatedRoute,
  ) {
  }

  getStatusClass(status: string) {
    switch (status) {
      case 'Success':
        return 'bg-success';
      case 'Failed':
        return 'bg-danger';
      case 'New':
        return 'bg-primary';
      default:
        return 'bg-warning';
    }

  }
}
