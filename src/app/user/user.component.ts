import { Component , EventEmitter, input, Input, output, Output} from '@angular/core';

import { type User } from './user.model';
import { CardComponent } from "../shared/card/card.component";

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
  imports: [CardComponent]
})


export class UserComponent {
@Input({required:true})user!: User;
@Input({required:true}) selected!: boolean
  // @Input({required:true}) id!: string;
  // @Input({required: true}) avatar! : string;
  // @Input({required: true}) name! : string;
 @Output() select = new EventEmitter<string>(); //generic type definition


  get imagepath() {
    return 'assets/users/' + this.user.avatar;
   }

  onSelectuser() {
    this.select.emit(this.user.id);
  }
}
