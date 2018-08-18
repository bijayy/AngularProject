import { Routes } from '@angular/router';
import { SigninComponent, SignupComponent } from '../app/project.dependencies'

const routes: Routes = [
    { path: 'user/signin', component: SigninComponent },
    { path: 'user/signup', component: SignupComponent },

    { path: '', redirectTo: '', pathMatch:'full'  }
];