import { Component } from '@angular/core';
import { ClientService } from '../client.service';
import { ClientI } from '../client-i';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  searchTitle='';
  results: ClientI[]=[];

  constructor(private clientService:  ClientService){}
  search(){
    this.results=this.clientService.searchClients(this.searchTitle)
  }
}
