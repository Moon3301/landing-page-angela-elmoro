import { NgModule } from '@angular/core';
import { AccordionModule } from 'primeng/accordion';
import { CardModule } from 'primeng/card';

@NgModule({
  exports: [
    AccordionModule,
    CardModule
  ]
})
export class PrimengModule { }
