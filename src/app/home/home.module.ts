import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '@shared';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [CommonModule, TranslateModule, SharedModule, HomeRoutingModule, FormsModule, ReactiveFormsModule],
  declarations: [HomeComponent],
  bootstrap: [HomeComponent],
})
export class HomeModule {}
