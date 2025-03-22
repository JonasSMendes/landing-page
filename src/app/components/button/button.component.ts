import { Component, Input, Output, EventEmitter, input } from '@angular/core';

type BtnVarient = "primary" | "secondary"

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input() title: String = "";
  @Input() disable: boolean = false;
  @Input() loading: boolean = false;

  @Input() width: string = "449px";

  @Input() varient: BtnVarient = "primary";

  @Output() onSubmit = new EventEmitter();

  submit() {
    this.onSubmit.emit();
  }
}
