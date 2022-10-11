import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlouseComponent } from './blouse/blouse.component';
import { DressesComponent } from './dresses/dresses.component';
import { FallComponent } from './fall/fall.component';
import { KidsComponent } from './kids/kids.component';
import { LongfComponent } from './longf/longf.component';
import { SareeComponent } from './saree/saree.component';

const routes: Routes = [
  { path: 'saree', component:SareeComponent },
  { path: 'one', component:LongfComponent},
  { path: 'blouses', component:BlouseComponent},
  { path: 'dresses', component:DressesComponent},
  { path: 'kids', component:KidsComponent},
  { path: 'fallpico', component:FallComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
