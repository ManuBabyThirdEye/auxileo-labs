import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllBlogComponent } from './all-blog/all-blog.component';
import { AllCoursesComponent } from './all-courses/all-courses.component';
import { AllVideoComponent } from './all-video/all-video.component';
import { CoursesDetailsComponent } from './courses-details/courses-details.component';
import { HomeComponent } from './home/home.component';
import { MoreAboutComponent } from './more-about/more-about.component';

const routes: Routes = [
  { path: '', component:  HomeComponent},
  { path: 'all-blogs', component:  AllBlogComponent},
  { path: 'all-video', component:  AllVideoComponent},
  { path: 'all-courses', component:  AllCoursesComponent},
  { path: 'more-about', component:  MoreAboutComponent},
  { path: 'all-courses/course-details', component:  CoursesDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
