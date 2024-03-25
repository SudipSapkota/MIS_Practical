import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { RouterModule, Routes} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProductComponent } from './product/product.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { CanActivate } from './auth.gaurd';
import { BrowserAnimationsModule } from   
    '@angular/platform-browser/animations';  
import {MatSnackBarModule} from '@angular/material/snack-bar'; 
import { MatButtonModule } from '@angular/material/button';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { FormsModule } from '@angular/forms'; 
import { HttpClientModule } from '@angular/common/http';
import { ConfirmDialogComponentComponent } from './confirm-dialog-component/confirm-dialog-component.component';
import {MatIconModule} from '@angular/material/icon'; 
//Define routes
const routes: Routes=[
{path:'', component: HomeComponent},
{path:'Home', component: HomeComponent},
{path:'About', component: AboutComponent},
{path:'Product', component: ProductComponent },
{path:'Contact', component: ContactComponent, canDeactivate:[(comp: ContactComponent)=> {return comp.canExit();}]},
// {path:'login', component:LoginComponent, canActivate:[CanActivate]},
{path:'login', component:LoginComponent},
{path:'logout', component:LogoutComponent},
{path:'**', component:NotFoundComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ProductComponent,
    NotFoundComponent,
    LoginComponent,
    LogoutComponent,
    ConfirmDialogComponentComponent,
    
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    MatButtonModule,  
    MatSnackBarModule,  
    BrowserAnimationsModule ,
    FormsModule,
    MatIconModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
