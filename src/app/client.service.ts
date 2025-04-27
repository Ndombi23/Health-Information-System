import { Injectable } from '@angular/core';
import { ClientI } from './client-i';
import { Healthprogram } from './healthprogram';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private healthprograms: Healthprogram[]=[];
  private clients: ClientI[]=[];
  private clientIdCounter= 1;
  private programIdCounter= 1;
  constructor() { }

  createProgram(name: string): void {
    this.healthprograms.push({id: this.programIdCounter++, name})
  }
  registerClient(name: string): void {
    this.clients.push({id: this.clientIdCounter++, name, healthprograms: []})
  }
  enrolClient(clientId: number, programIds: number[]): void{
    const client=this.clients.find(c => c.id === clientId);
    if(client){
      client.healthprograms= this.healthprograms.filter(p => programIds.includes(p.id))
    }
  }
  searchClients(name: string): ClientI[] {
    return this.clients.filter(c => c.name.toLowerCase().includes(name.toLowerCase()));
  }
  getClientProfile(id: number): ClientI|undefined {
    return this.clients.find(c => c.id ===id);
  }
  getAllPrograms(): Healthprogram[]{
    return [...this.healthprograms];
  }
  getAllClients(): ClientI[]{
    return [...this.clients];
  }
}
