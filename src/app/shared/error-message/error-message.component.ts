import { Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { InputValidator } from 'src/app/interfaces';


@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.css']
})
export class ErrorMessageComponent {
  @Input() control!: AbstractControl | null;
  @Input() validations: InputValidator[] = [];
  
  @Input() message!: string; 
  
  @Input() show! : boolean;
  
}