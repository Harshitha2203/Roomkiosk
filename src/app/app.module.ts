import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './component/landing-page/landing-page.component';
import { HeaderComponent } from './component/components/header/header.component';
import { RoomListComponent } from './component/components/room-list/room-list.component';
import { FooterComponent } from './component/components/footer/footer.component';
import { HomeComponent } from './component/home/home.component';
import { AdminComponent } from './component/admin/admin.component';
import { AdminmoduleModule } from './component/admin/adminmodule/adminmodule.module';
import { HomemoduleModule } from './component/home/homemodule/homemodule.module';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    HeaderComponent,
    RoomListComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
