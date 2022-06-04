
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatRadioModule } from '@angular/material/radio';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatRadioModule,
    MatPaginatorModule,
    MatNativeDateModule,
    MatButtonModule,

  ],
  providers: [MatNativeDateModule],
  bootstrap: [AppComponent]
})
export class AppModule { }

