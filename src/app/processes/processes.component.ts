import {Component} from '@angular/core';
import {processes} from "../process";

@Component({
  selector: 'app-processes',
  templateUrl: './processes.component.html',
  styleUrls: ['./processes.component.css']
})
export class ProcessesComponent {

  processes = processes;
}
