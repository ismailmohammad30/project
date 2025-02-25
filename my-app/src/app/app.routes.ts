import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import{ProductsComponent} from './products/products.component';
import { MyproductsComponent } from './myproducts/myproducts.component';
import { ProfileComponent } from './profile/profile.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    {path: 'signup', component:SignupComponent},
    {path: 'signin', component:SigninComponent},
    {path: 'products', component:ProductsComponent},
    {path: 'myproducts', component:MyproductsComponent},
    {path: 'profile', component:ProfileComponent}
];
