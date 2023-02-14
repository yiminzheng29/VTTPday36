import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './components/customer.component';
import { ElephantComponent } from './components/elephant.component';
import { HomeComponent } from './components/home.component';
import { TrexComponent } from './components/trex.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path: 'elephant', component: ElephantComponent},
  {path: 'trex', component: TrexComponent},
  {path: 'customer/:custId', component: CustomerComponent},
  {path: '**', redirectTo: "/", pathMatch: "full"}

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
