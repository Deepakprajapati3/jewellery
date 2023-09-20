import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RingsComponent } from './rings/rings.component';
import { RoseComponent } from './rose/rose.component';

const routes: Routes = [
  {path:'',redirectTo:'rings',pathMatch:'full'},
  {path:'rings',component:HomeComponent},
  {path:"rose",component:RoseComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
