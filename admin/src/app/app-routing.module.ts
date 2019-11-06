import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CategoryComponent } from './category/category.component';
import { ContentComponent } from './content/content.component';
import { LoginComponent } from './login/login.component';
import { SigninComponent } from './signin/signin.component';
import { BeforeLoginService } from './service/before-login.service';
import { AfterLoginService } from './service/after-login.service';

import { AddactivityComponent } from './addactivity/addactivity.component';
import { AddcategoryComponent } from './addcategory/addcategory.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PopulationComponent } from './population/population.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [

  {path: '', component: HomeComponent,canActivate: [AfterLoginService]},  
  {path: 'Login', component: LoginComponent,canActivate: [BeforeLoginService] },
  {path: 'Signin', component: SigninComponent,canActivate: [BeforeLoginService] },


  {path: 'dashboard', component: DashboardComponent,canActivate: [AfterLoginService] },
  {path: 'population/:id', component: PopulationComponent,canActivate: [AfterLoginService] },
  {path: 'edit/:id', component: EditComponent,canActivate: [AfterLoginService] },

  
  {path: 'Category/:id', component: CategoryComponent},
  {path: 'Content/:id', component: ContentComponent },
  {path: 'addcat', component:  AddcategoryComponent },
  {path: 'addact', component:  AddactivityComponent },
  {path: 'About', component:  AboutComponent },
  {path: 'Contact', component:  ContactComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
