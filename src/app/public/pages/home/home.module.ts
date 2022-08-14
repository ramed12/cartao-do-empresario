import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeBannerComponent } from './home.component';
import { AccordionModule } from '../accordion/accordion.module';

@NgModule({
  declarations: [HomeBannerComponent],
  imports: [CommonModule, AccordionModule],
})
export class HomeModule {}
