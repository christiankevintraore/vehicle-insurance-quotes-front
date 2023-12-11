import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { marker } from '@biesbjerg/ngx-translate-extract-marker';

import { Shell } from '@app/shell/shell.service';
import { QuoteComponent } from './quote.component';

const routes: Routes = [
  Shell.childRoutes([{ path: 'quote', component: QuoteComponent, data: { title: marker('Quote') } }]),
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class QuoteRoutingModule {}
