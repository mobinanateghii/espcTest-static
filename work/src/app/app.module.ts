import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule , FormControl , FormGroup , Validators , FormBuilder } from '@angular/forms';

import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatAutocompleteModule} from '@angular/material/autocomplete';

import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import {  PaymentsComponent } from './payments/payments.component';
import { TestComponent } from './test/test.component';
import { CreatPaymentComponent } from './creat-payment/creat-payment.component';
import { EditPaymentComponent } from './edit-payment/edit-payment.component';
import { DialogComponent } from './edit-payment/dialog/dialog.component';
import { TestPipe } from './test.pipe';
import { ErrorsComponent } from './_Errors/errors/errors.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    SignUpComponent,
    LoginComponent,
    PaymentsComponent,
    TestComponent,
    CreatPaymentComponent,
    EditPaymentComponent,
    DialogComponent,
    TestPipe,
    ErrorsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatSidenavModule,
    MatDialogModule,
    MatAutocompleteModule,
    MatSnackBarModule,
  ],
  providers: [  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
