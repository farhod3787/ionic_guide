import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { TestComponent } from './test/test.component';
import { SelectLangComponent } from './select-lang/select-lang.component';
import { SelectHotelComponent } from './select-hotel/select-hotel.component';

const routes: Routes = [
  { path: '', redirectTo: 'select', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'test', component: TestComponent },
  { path: 'select', component: SelectLangComponent},
  { path : 'selectHotel/:id', component: SelectHotelComponent}

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
