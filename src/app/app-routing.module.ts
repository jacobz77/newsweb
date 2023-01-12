import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessnewsComponent } from './businessnews/businessnews.component';
import { NewsheadingComponent } from './newsheading/newsheading.component';
import { TechnewsComponent } from './technews/technews.component';

const routes: Routes = [
  {path:'',component:NewsheadingComponent},
  {path:'tech',component:TechnewsComponent},
  {path:'business',component:BusinessnewsComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
