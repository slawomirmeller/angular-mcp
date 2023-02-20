import {Component, OnInit} from '@angular/core';
import {ProcessStep} from "../process-step";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-process-step-details',
  templateUrl: './process-step-details.component.html',
  styleUrls: ['./process-step-details.component.css']
})
export class ProcessStepDetailsComponent implements OnInit{

  processCode: String | undefined;
  processId: String | undefined;
  step: ProcessStep | undefined;
  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    this.processCode = String(routeParams.get('processCode'));
    this.processId = String(routeParams.get('processId'));

    this.step = history.state;
  }

  constructor(
    private route: ActivatedRoute,
  ) {
  }

}
