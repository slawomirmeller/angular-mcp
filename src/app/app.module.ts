import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from "@angular/router";

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProcessesComponent } from './processes/processes.component';
import { ProcessRunsComponent } from './process-runs/process-runs.component';
import { ProcessStepsComponent } from './process-steps/process-steps.component';
import { ProcessStepDetailsComponent } from './process-step-details/process-step-details.component';
import { FieldViewComponent } from './field-view/field-view.component';
import { ProcessMessagesComponent } from './process-messages/process-messages.component';

@NgModule({
  declarations: [
    AppComponent,
    ProcessesComponent,
    ProcessRunsComponent,
    ProcessStepsComponent,
    ProcessStepDetailsComponent,
    FieldViewComponent,
    ProcessMessagesComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    RouterModule.forRoot([
      {path: '', component: ProcessesComponent},
      {path: 'processes/:processCode', component: ProcessRunsComponent},
      {path: 'processes/:processCode/:processId', component: ProcessStepsComponent},
      {path: 'processes/:processCode/:processId/:stepId/details', component: ProcessStepDetailsComponent},
      {path: 'processes/:processCode/:processId/:stepId/messages', component: ProcessMessagesComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
