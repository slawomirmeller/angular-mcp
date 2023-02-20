import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProcessStep, steps} from "../process-step";

@Component({
  selector: 'app-process-steps',
  templateUrl: './process-steps.component.html',
  styleUrls: ['./process-steps.component.css']
})
export class ProcessStepsComponent implements OnInit{

  steps: ProcessStep[] | undefined;
  processCode: String | undefined;
  processId: String | undefined;

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    this.processCode = String(routeParams.get('processCode'));
    this.processId = String(routeParams.get('processId'));
    this.steps = steps;
  }

  constructor(
    private route: ActivatedRoute,
  ) {
  }

  getStatusClass(status: string) {
    switch (status) {
      case 'Success':
      case 'Accepted':
        return 'bg-success';
      case 'Failed':
        return 'bg-danger';
      case 'Not started':
        return 'bg-primary';
      default:
        return 'bg-warning';
    }

    }
}
