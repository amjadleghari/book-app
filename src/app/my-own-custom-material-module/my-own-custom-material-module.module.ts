import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
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
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MyOwnCustomMaterialModule { }
