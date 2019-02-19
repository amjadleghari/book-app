import { NgModule } from '@angular/core';
import { MatButtonModule, MatCheckboxModule, MatCardModule, MatInputModule, MatOptionModule, MatSelectModule } from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule
  ],
  
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatInputModule, 
    MatOptionModule,
    MatSelectModule
    ],
})
export class MyOwnCustomMaterialModule { }
