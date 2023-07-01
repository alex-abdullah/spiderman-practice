import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpidermenComponent } from './spidermen/spidermen.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SpidermanDetailComponent } from './spiderman-detail/spiderman-detail.component';

const routes: Routes = [
  { path: 'spidermen', component: SpidermenComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: SpidermanDetailComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
