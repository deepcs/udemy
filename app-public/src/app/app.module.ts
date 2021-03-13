import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HomeListComponent } from './home-list/home-list.component';
import { FrameworkComponent } from './framework/framework.component';
 import { CreateComponent } from './create/create.component';
 import { DetailsPageComponent } from './details-page/details-page.component';
 import { UpdateComponent } from './update/update.component';
import { APP_BASE_HREF } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { CourseServiceService } from './course-service.service';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    HomepageComponent,
    HomeListComponent,
    FrameworkComponent,
     CreateComponent,
     DetailsPageComponent,
     UpdateComponent,
    NavbarComponent
  ],
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        component: HomepageComponent
      },
      {
        path: 'about',
        component: AboutComponent
      },
      {
        path: 'new',
        component: CreateComponent
      },
      {
        path: 'display-list',
        component: HomeListComponent
      },
      {
        path: 'courses/:courseid',
        component: DetailsPageComponent
      },
      {
        path: 'update/:courseid',
        component: UpdateComponent
      }
    ]),
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
    CourseServiceService
  ],
  bootstrap: [FrameworkComponent]
})
export class AppModule { }
