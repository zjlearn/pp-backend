import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {FooterComponent} from './shared/footer/footer.component';
import {HeaderComponent} from './shared/header/header.component';
import {ImagecardComponent} from './shared/imagecard/imagecard.component';
import {NavbarComponent} from './shared/navbar/navbar.component';
import {MsgiconbtnComponent} from './shared/msgiconbtn/msgiconbtn.component';
import {FigurecardComponent} from './shared/figurecard/figurecard.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {LockComponent} from './page/lock/lock.component';
import {LoginComponent} from './page/login/login.component';
import {RegisterComponent} from './page/register/register.component';
import {HomeComponent} from './dashboard/home/home.component';
import {NotificationComponent} from './dashboard/notification/notification.component';
import {ProfileComponent} from './dashboard/profile/profile.component';
import {RootComponent} from './dashboard/root/root.component';
import {SettingsComponent} from './dashboard/settings/settings.component';
import {TableComponent} from './dashboard/table/table.component';
import {PanelsComponent} from './dashboard/component/panels/panels.component';
import {WizardComponent} from './dashboard/component/wizard/wizard.component';
import {SweetAlertComponent} from './dashboard/sweet-alert/sweet-alert.component';
import {PriceTableComponent} from './dashboard/component/pricetable/pricetable.component';
import {FormsModule} from '@angular/forms';
import {routing} from './app.routes';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SettingsService} from './services/settings.service';
import {HttpClientModule} from '@angular/common/http';
import {MaterialModule} from './material/material.module';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    ImagecardComponent,
    NavbarComponent,
    MsgiconbtnComponent,
    FigurecardComponent,
    SidebarComponent,
    LockComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    NotificationComponent,
    ProfileComponent,
    RootComponent,
    SettingsComponent,
    SweetAlertComponent,
    TableComponent,
    PanelsComponent,
    PriceTableComponent,
    WizardComponent,
    SweetAlertComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    routing,
    MaterialModule,
    BrowserAnimationsModule,
  ],
  providers: [SettingsService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
