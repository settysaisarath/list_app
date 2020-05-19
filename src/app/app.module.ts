import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import { TestService } from './test.service';
import {FormsModule} from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,HttpClientModule,FormsModule
  ],
  providers: [TestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
