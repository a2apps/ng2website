import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing, appRoutingProviders } from './app.routing'
import { AppComponent }   from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { JumbotronComponent } from './components/jumbotron/jumbotron.component';
import { AboutComponent } from './components/pages/about.component';
import { HomeComponent } from './components/pages/home.component';
@NgModule({
  imports:      [ BrowserModule, routing],
  declarations: [ 
                  AppComponent,
                  NavbarComponent,
                  JumbotronComponent,
                  HomeComponent,
                  AboutComponent
                ],
  providers: [appRoutingProviders], 
  bootstrap:    [ AppComponent]
})

export class AppModule { }