import { Routes } from '@angular/router';
import { ProgramComponent } from './program/program.component';
import { RegisterComponent } from './register/register.component';
import { EnrollComponent } from './enroll/enroll.component';
import { SearchComponent } from './search/search.component';
import { ProfileComponent } from './profile/profile.component';

export const routes: Routes = [
  {path: 'program', component: ProgramComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'enroll', component: EnrollComponent},
  {path: 'search', component: SearchComponent},
  {path: 'view', component: ProfileComponent},
  {path: '', redirectTo:'/program', pathMatch: 'full'}
];
