import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';
import { SidebarModule } from './sidebar/sidebar.module';
import { FooterModule } from './shared/footer/footer.module';
import { NavbarModule} from './shared/navbar/navbar.module';
import { FixedPluginModule} from './shared/fixedplugin/fixedplugin.module';
import { NguiMapModule} from '@ngui/map';

import { DashboardComponent }   from './dashboard/dashboard.component';
import { UserProfileComponent }   from './userProfile/userProfile.component';
import { ProjectsComponent }   from './projectList/projects.component';
import { TypographyComponent }   from './typography/typography.component';
import { SubmissionsComponent }   from './submissions/submissions.component';
import { GroupActivityComponent }   from './groupActivity/groupActivity.component';
import { NotificationsComponent }   from './notifications/notifications.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import  {Services} from './services/user.service';
import {HttpModule} from '@angular/http';
import {CookieService} from 'ngx-cookie-service';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UserProfileComponent,
    ProjectsComponent,
    TypographyComponent,
    SubmissionsComponent,
    GroupActivityComponent,
    NotificationsComponent,
    LoginComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRoutes),
    SidebarModule,
    NavbarModule,
    FooterModule,
    FormsModule,
    HttpModule,
    FixedPluginModule,
    NguiMapModule.forRoot({apiUrl: 'https://groupActivity.google.com/groupActivity/api/js?key=YOUR_KEY_HERE'})

  ],
  providers: [
      Services,
      CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
