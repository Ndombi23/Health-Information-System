import { Component } from '@angular/core';
import { ClientService } from '../client.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-enroll',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './enroll.component.html',
  styleUrl: './enroll.component.css'
})
export class EnrollComponent {

  chosenClientId= 0;
  chosenProgramIds: number[]=[];

  constructor(public clientService: ClientService){}

  enrolClient (){
    if(this.chosenClientId && this.chosenProgramIds.length > 0){
      this.clientService.enrolClient(this.chosenClientId, this.chosenProgramIds);
      alert('Enrolment successful')
    }
  }
}
