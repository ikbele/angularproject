import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { HeaderComponent } from './header/header.component';
export const routes: Routes = [
 { path:"header",component: HeaderComponent},
 { path:"accueil",component: AccueilComponent}
 
];
@NgModule({
  imports:[RouterModule. forRoot(routes)],
    exports: [RouterModule]
    })
    export class AppRoutingModule {}