import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InfirmiereListComponent } from './infirmiere-list/infirmiere-list.component';
import { NavbarComponent } from './shared/component/navbar/navbar.component';
import { PatientListComponent } from './patient-list/patient-list.component';
import { InfirmiereNewComponent } from './infirmiere-new/infirmiere-new.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    InfirmiereListComponent,
    NavbarComponent,
    PatientListComponent,
    InfirmiereNewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
