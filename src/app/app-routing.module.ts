import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StudiesComponent } from './studies/studies.component';
import { LaboralExperienceComponent } from './laboral-experience/laboral-experience.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'studies', component: StudiesComponent },
  { path: 'laboral-experience', component: LaboralExperienceComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'home', component: HomeComponent },
  // Puedes agregar más rutas aquí
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
