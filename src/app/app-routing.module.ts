import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfirmiereListComponent } from './infirmiere-list/infirmiere-list.component';
import { InfirmiereNewComponent } from './infirmiere-new/infirmiere-new.component';
import { PatientListComponent } from './patient-list/patient-list.component';

const routes: Routes = [
  // redirection
  // { path: '', redirectTo: 'infirmieres', pathMatch: 'full' },

  // Routes pour la section infirmiere
  {
    path: 'infirmieres',
    children: [
      { path: '', component: InfirmiereListComponent, pathMatch: 'full' },
          { path: 'new', component: InfirmiereNewComponent },
      //     { path: ':id', component: InfirmierePageComponent },
    ],
  },

  // Routes pour la section patient
  {
    path: 'patients',
    children: [
      { path: '', component: PatientListComponent, pathMatch: 'full' },
      // { path: 'new', component: NewPatientComponent },
      // { path: ':id', component: PatientPageComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
