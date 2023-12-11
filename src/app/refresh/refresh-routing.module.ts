import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { marker } from '@biesbjerg/ngx-translate-extract-marker';

import { Shell } from '@app/shell/shell.service';
import { RefreshComponent } from './refresh.component';

const routes: Routes = [
  Shell.childRoutes([{ path: 'refresh', component: RefreshComponent, data: { title: marker('Refresh') } }]),
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class RefreshRoutingModule {}
