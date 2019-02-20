import { NgModule } from '@angular/core';
import { MatButtonModule, MatCheckboxModule, MatCardModule,
  MatInputModule, MatOptionModule, MatSelectModule, MatToolbarModule } from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatToolbarModule
  ],

  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatInputModule, 
    MatOptionModule,
    MatSelectModule,
    MatToolbarModule
    ],
})
export class MyOwnCustomMaterialModule { }
