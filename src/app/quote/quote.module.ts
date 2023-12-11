import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { QuoteRoutingModule } from './quote-routing.module';
import { QuoteComponent } from './quote.component';

@NgModule({
  imports: [CommonModule, TranslateModule, QuoteRoutingModule],
  declarations: [QuoteComponent],
})
export class QuoteModule {}
