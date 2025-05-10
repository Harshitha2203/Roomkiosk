import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './component/landing-page/landing-page.component';

const routes: Routes = [ 
  { path: '', component:LandingPageComponent },
  { path: 'home', loadChildren: () => import('./component/home/homemodule/homemodule.module').then(m => m.HomemoduleModule) },
  { path: 'admin', loadChildren: () => import('./component/admin/adminmodule/adminmodule.module').then(m => m.AdminmoduleModule) }, 
  { path: '**', redirectTo: '', pathMatch: 'full' }, // Fallback route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
