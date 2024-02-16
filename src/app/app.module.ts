import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from  '@angular/common/http';
import { GaugeModule } from 'angular-gauge';
import{MatTabsModule} from '@angular/material/tabs'
import{MatIconModule} from '@angular/material/icon';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { HomeComponent } from './home/home.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { DetailsComponent } from './details/details.component';
import { DetailTabsComponent } from './details/detail-tabs/detail-tabs.component';




@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    HomeComponent,
    DetailsComponent,
    DetailTabsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatTabsModule,
    MatIconModule,
    GaugeModule.forRoot(),
    MatFormFieldModule,
    MatSelectModule,
    MatProgressSpinnerModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
