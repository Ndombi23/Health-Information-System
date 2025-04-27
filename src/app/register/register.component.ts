import { ClientService } from './../client.service';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  clientName= '';

  constructor(private clientService: ClientService){}

  registerClient(){
    if(this.clientName.trim()){
      this.clientService.registerClient(this.clientName);
      this.clientName='';
      alert('Registration successful');
    }
  }

}
