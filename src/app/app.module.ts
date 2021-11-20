import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxMatDatetimePickerModule, NgxMatTimepickerModule, NgxMatDateAdapter, NGX_MAT_DATE_FORMATS } from '@angular-material-components/datetime-picker';
import { NgxMatMomentModule, NGX_MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular-material-components/moment-adapter';
import { AppComponent } from './app.component';


import { JalaliNgxMatDateAdapter, PERSIAN_DATE_FORMATS } from './datetime/custom-date-adapter';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatFormFieldControl, MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
   providers: [
      {
         provide: NgxMatDateAdapter,
         useClass: JalaliNgxMatDateAdapter,
         deps: [MAT_DATE_LOCALE, NGX_MAT_MOMENT_DATE_ADAPTER_OPTIONS]
      },
      { provide: NGX_MAT_DATE_FORMATS, useValue: PERSIAN_DATE_FORMATS }
   ],
   declarations: [
      AppComponent
   ],
   imports: [
      MatFormFieldModule,
      MatInputModule,
      BrowserModule,
      HttpClientModule,
      BrowserAnimationsModule,
      MatDatepickerModule,
      MatInputModule,
      NgxMatDatetimePickerModule,
      NgxMatTimepickerModule,
      FormsModule,
      ReactiveFormsModule,
      MatButtonModule,
      NgxMatMomentModule,
      MatRadioModule,
      MatSelectModule,
      MatCheckboxModule,
      MatNativeDateModule,
      MatMomentDateModule,

   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }