import { DealsComponent } from './Components/home-area/deals/deals.component';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrandsComponent } from './Components/home-area/brands/brands.component';
import { ClockComponent } from './Components/home-area/clock/clock.component';
import { DiscountComponent } from './Components/home-area/discount/discount.component';
import { HomeComponent } from './Components/home-area/home/home.component';
import { NumOfShoesComponent } from './Components/home-area/num-of-shoes/num-of-shoes.component';
import { OpinionComponent } from './Components/home-area/opinion/opinion.component';
import { YoutubeComponent } from './Components/home-area/youtube/youtube.component';
import { FooterComponent } from './Components/layout-area/footer/footer.component';
import { HeaderComponent } from './Components/layout-area/header/header.component';
import { LayoutComponent } from './Components/layout-area/layout/layout.component';
import { MenuComponent } from './Components/layout-area/menu/menu.component';
import { SurveyComponent } from './Components/home-area/survey/survey.component';
import { DrinkTimeComponent } from './Components/home-area/drink-time/drink-time.component';
import { StoryComponent } from './Components/about-area/story/story.component';
import { ProductsComponent } from './Components/products-area/products/products.component';
import { AboutComponent } from './Components/about-area/about/about.component';
import { PageNotFoundComponent } from './Components/layout-area/layout/page-not-found/page-not-found.component';
import { vatCalculatorComponent } from './Components/home-area/VatCalculator/vatCalculator.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { UpdateEmployeesComponent } from './Components/employees-area/update-employees/update-employees.component';
import { EmployeesListComponent } from './Components/employees-area/employees-list/employees-list.component';
import { EmployeesDetailsComponent } from './Components/employees-area/employees-details/employees-details.component';
import { AddEmployeesComponent } from './Components/employees-area/add-employees/add-employees.component';
import { EmployeesCardComponent } from './Components/employees-area/employees-card/employees-card.component';
import { ShowGeneratorNumComponent } from './Components/home-area/random-numbers/show-generator-num.component';
import { RegisterComponent } from './Components/auth-area/register/register.component';
import { LoginComponent } from './Components/auth-area/login/login.component';
import { LogoutComponent } from './Components/auth-area/logout/logout.component';
import { AuthMenuComponent } from './Components/auth-area/auth-menu/auth-menu.component';
import { JwtInterceptor } from './services/jwt.interceptor';
import { ProductListComponent } from './Components/products-area/product-list/product-list.component';
import { ProductCardComponent } from './Components/products-area/product-card/product-card.component';
import { ProductDetailsComponent } from './Components/products-area/product-details/product-details.component';
import { AddProductComponent } from './Components/products-area/add-product/add-product.component';
import { UpdateProductComponent } from './Components/products-area/update-product/update-product.component';
import { CraditCardCheck } from './Components/home-area/cradit-card-check/cradit-card-check.component';
import { opinionOnUs } from './Components/home-area/opinion-on-us/opinion-on-us.component';


@NgModule({
  declarations: [
      //פה אנו מזמנים את כל הקומפוננטות שיצרנו למודול שלנו
    LayoutComponent,
    FooterComponent,
    HeaderComponent,
    MenuComponent,
    HomeComponent,
    NumOfShoesComponent,
    ClockComponent,
    DiscountComponent,
    BrandsComponent,
    OpinionComponent,
    YoutubeComponent,
    DealsComponent,
    SurveyComponent,
    DrinkTimeComponent,
    AboutComponent,
    ProductsComponent,
    StoryComponent,
    PageNotFoundComponent,
    vatCalculatorComponent,
    UpdateEmployeesComponent,
    EmployeesListComponent,
    EmployeesDetailsComponent,
    AddEmployeesComponent,
    EmployeesCardComponent,
    ShowGeneratorNumComponent,
    RegisterComponent,
    LoginComponent,
    LogoutComponent,
    AuthMenuComponent,
    ProductListComponent,
    ProductCardComponent,
    ProductDetailsComponent,
    AddProductComponent,
    CraditCardCheck,
    UpdateProductComponent,
    opinionOnUs,

    


    
     ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],

  providers: [{
    useClass: JwtInterceptor,
    provide: HTTP_INTERCEPTORS,
    multi: true
}],


  exports: [],
  //פה אנו קובעים את הקומפוננטה הראשית של הפרוייקט שלנו וכך שאנו רושמים את שם המחלקה של אותה קומפוננטה
  bootstrap: [LayoutComponent]
})
export class AppModule { }
