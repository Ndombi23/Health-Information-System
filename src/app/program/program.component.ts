import { Component } from '@angular/core';
import { ClientService } from '../client.service';
import {FormsModule} from '@angular/forms'

@Component({
  selector: 'app-program',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './program.component.html',
  styleUrl: './program.component.css'
})
export class ProgramComponent{
  programName='';
  constructor(private clientService:ClientService){}

  createProgram(){
    if(this.programName.trim()){
      this.clientService.createProgram(this.programName);
      this.programName='';
      alert('You have successfully created a program');
    }
  }

}
