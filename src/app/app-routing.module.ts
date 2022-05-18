import { RegisterComponent } from './Components/auth-area/register/register.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './Components/about-area/about/about.component';
import { StoryComponent } from './Components/about-area/story/story.component';
import { HomeComponent } from './Components/home-area/home/home.component';
import { PageNotFoundComponent } from './Components/layout-area/layout/page-not-found/page-not-found.component';
import { ProductsComponent } from './Components/products-area/products/products.component';
import { EmployeesListComponent } from './Components/employees-area/employees-list/employees-list.component';
import { EmployeesDetailsComponent } from './Components/employees-area/employees-details/employees-details.component';
import { UpdateEmployeesComponent } from './Components/employees-area/update-employees/update-employees.component';
import { AddEmployeesComponent } from './Components/employees-area/add-employees/add-employees.component';
import { LoginComponent } from './Components/auth-area/login/login.component';
import { LogoutComponent } from './Components/auth-area/logout/logout.component';
import { AuthGuard } from './services/auth.guard';
import { ProductListComponent } from './Components/products-area/product-list/product-list.component';
import { ProductDetailsComponent } from './Components/products-area/product-details/product-details.component';
import { UpdateProductComponent } from './Components/products-area/update-product/update-product.component';
import { AddProductComponent } from './Components/products-area/add-product/add-product.component';
import { CraditCardCheck } from './Components/home-area/cradit-card-check/cradit-card-check.component';


const routes: Routes = [

    { path: "home", component: HomeComponent },
    { path: "about", component: AboutComponent },
    { path: "story", component: StoryComponent },
    { path: "products", component: ProductsComponent, canActivate: [AuthGuard]},
    { path: "employees", component: EmployeesListComponent },
    { path: "employees/details/:id", component: EmployeesDetailsComponent },
    { path: "employees/edit/:id", component: UpdateEmployeesComponent },
    { path: "employees/new", component: AddEmployeesComponent },
    { path: "register", component: RegisterComponent },
    { path: "login", component: LoginComponent },
    { path: "logout", component: LogoutComponent },


    { path: "products", component: ProductListComponent },
    { path: "products/details/:id", component: ProductDetailsComponent },
    { path: "products/edit/:id", component: UpdateProductComponent },
    { path: "products/new", component: AddProductComponent, canActivate: [AuthGuard] },
    { path: "CraditCardCheck", component: CraditCardCheck },

    
    // Default Route: 
    // { path: "", component: HomeComponent },
    { path: "", redirectTo: "/home", pathMatch: "full" }, // pathMatch: "full" --> searches exact empty path

    { path: "**", component: PageNotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
