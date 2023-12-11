import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { RefreshRoutingModule } from './refresh-routing.module';
import { RefreshComponent } from './refresh.component';

@NgModule({
  imports: [CommonModule, TranslateModule, RefreshRoutingModule],
  declarations: [RefreshComponent],
})
export class RefreshModule {}
