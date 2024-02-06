import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonTypes } from '../../constants/button-types.enum';
import { ButtonSizes } from '../../constants/button-size.enum';
import { ButtonPipe } from '../../pipes/button.pipe';
import { NgClass } from '@angular/common';

@Component({
  selector: 'lib-button',
  standalone: true,
  imports: [ButtonPipe, NgClass],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Output() buttonClickEvent = new EventEmitter();

  @Input() type: ButtonTypes = ButtonTypes.PRIMARY;
  @Input() size: ButtonSizes = ButtonSizes.MIDDLE;
  @Input() text: string = '';

  clickOnButton() {
    this.buttonClickEvent.emit();
  }
}
