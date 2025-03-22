import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-work-team',
  imports: [],
  templateUrl: './work-team.component.html',
  styleUrl: './work-team.component.scss'
})
export class WorkTeamComponent {
  @Input() img: string = ""
  @Input() title: string = ""
  @Input() text: string = ""

}
