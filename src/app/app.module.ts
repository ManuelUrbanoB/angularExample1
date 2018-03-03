import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { ResaltarDirective } from './directives/resaltar.directive';
import { ContarClicksDIrective } from './directives/contarClick.drectives';


@NgModule({
  declarations: [
    AppComponent,
    ResaltarDirective,
    ContarClicksDIrective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCMjEFjawFOJCpwlIFWL4K2jqiWVzFaNrI'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
