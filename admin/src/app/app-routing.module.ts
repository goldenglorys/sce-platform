import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CategoryComponent } from './category/category.component';
import { ContentComponent } from './content/content.component';
import { LoginComponent } from './login/login.component';
import { SigninComponent } from './signin/signin.component';
import { BeforeLoginService } from './service/before-login.service';
import { AfterLoginService } from './service/after-login.service';

import { AddcategoryComponent } from './addcategory/addcategory.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PopulationComponent } from './population/population.component';

const routes: Routes = [

  {path: 'admin', component: HomeComponent,canActivate: [AfterLoginService]},  
  {path: 'Login', component: LoginComponent,canActivate: [BeforeLoginService] },
  {path: 'Signin', component: SigninComponent,canActivate: [BeforeLoginService] },


  {path: 'dashboard', component: DashboardComponent,canActivate: [AfterLoginService] },
  {path: 'population/:id', component: PopulationComponent,canActivate: [AfterLoginService] },

  
  {path: 'Category/:id', component: CategoryComponent},
  {path: 'Content/:id', component: ContentComponent },
  {path: 'addcat', component:  AddcategoryComponent },
  {path: 'About', component:  AboutComponent },
  {path: 'Contact', component:  ContactComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
