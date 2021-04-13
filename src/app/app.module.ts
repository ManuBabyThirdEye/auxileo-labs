import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { TopicsComponent } from './topics/topics.component';
import { CountsComponent } from './counts/counts.component';
import { MissionVissionComponent } from './mission-vission/mission-vission.component';
import { VideosComponent } from './videos/videos.component';
import { BlogsComponent } from './blogs/blogs.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { TeamComponent } from './team/team.component';
import { FooterComponent } from './footer/footer.component';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { NgxYoutubePlayerModule } from 'ngx-youtube-player';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AllVideoComponent } from './all-video/all-video.component';
import { AllBlogComponent } from './all-blog/all-blog.component';
import { AllCoursesComponent } from './all-courses/all-courses.component';
import { CoursesDetailsComponent } from './courses-details/courses-details.component';
import { HomeComponent } from './home/home.component';
import { MoreAboutComponent } from './more-about/more-about.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    TopicsComponent,
    CountsComponent,
    MissionVissionComponent,
    VideosComponent,
    BlogsComponent,
    TestimonialComponent,
    TeamComponent,
    FooterComponent,
    AllVideoComponent,
    AllBlogComponent,
    AllCoursesComponent,
    CoursesDetailsComponent,
    HomeComponent,
    MoreAboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, 'Auxileo-comming-soon'),
    AngularFirestoreModule,
    NgxYoutubePlayerModule.forRoot(),
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
