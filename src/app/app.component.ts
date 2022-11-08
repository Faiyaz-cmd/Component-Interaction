import { Component } from '@angular/core';
import { InteractionService } from './interaction.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Component-Interaction';

  constructor(private _interactionService: InteractionService) {  }

  greetstudent(){
    this._interactionService.sendMessage("Good Morning");
  }

  appreciatestudent(){
    this._interactionService.sendMessage("Well Done")
  }
}
