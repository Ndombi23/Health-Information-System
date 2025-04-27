import { Component } from '@angular/core';
import { ClientI } from '../client-i';
import { ClientService } from '../client.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile',
  imports: [FormsModule, CommonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  clientId= 0;
  client?: ClientI;
  constructor(public clientService: ClientService) {}

  viewProfile(){
    this.client= this.clientService.getClientProfile(this.clientId);
  }

}
