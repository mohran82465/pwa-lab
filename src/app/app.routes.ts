import { Routes } from '@angular/router';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { ProductsListComponent } from './Components/products-list/products-list.component';
import { ProductsParentComponent } from './Components/products-parent/products-parent.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { ObservableComponent } from './Components/observable/observable.component';
import { AddNewProductComponent } from './Components/add-new-product/add-new-product.component';
import { LoginComponent } from './Components/login/login.component';
import { authGuard } from './Guards/auth.guard';
import { UserComponent } from './Components/user/user.component';
import { UserReactiveFormComponent } from './Components/user-reactive-form/user-reactive-form.component';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full', title: "Products Page"},
    {path: 'home', component: ProductsParentComponent, title: "Home Page"},
    {path: 'products', component:ProductsListComponent, title: "Products Page"},
    {path: 'about', component: AboutUsComponent, title: "AboutUs Page", canActivate: [authGuard]},
    {path: 'contact', component: ContactUsComponent, title: "ContactUs Page", canActivate: [authGuard]},
    {path: 'products/:id', component: ProductDetailsComponent, title: 'Product Details'},
    {path: 'observal', component: ObservableComponent, title: "observable Page"},
    {path: 'Products/add', component: AddNewProductComponent, title: "Add New Product Page"},
    {path: 'login', component: LoginComponent, title: "login Page"},
    {path: 'user', component: UserComponent, title: "user Page"},
    {path: 'userReactive', component: UserReactiveFormComponent, title: "user reactive Page"},
    {path: '**', component: NotFoundComponent, title: 'NotFound'}
];
