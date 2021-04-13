import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSelectModule} from '@angular/material/select';

import { AssignmentsComponent } from './assignments/assignments.component';
import { RenduDirective } from './shared/rendu.directive';
import { NonRenduDirective } from './shared/non-rendu.directive';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AssignmentDetailComponent } from './assignments/assignment-detail/assignment-detail.component';
import { AddAssignmentComponent } from './assignments/add-assignment/add-assignment.component';
import { Routes, RouterModule } from '@angular/router';
import { EditAssigmentComponent } from './assignments/edit-assigment/edit-assigment.component';
import { AuthGuard } from './shared/auth.guard';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { JwtModule } from '@auth0/angular-jwt';
import { MenuComponent } from './menu/menu.component';
import {MatToolbarModule} from '@angular/material/toolbar'; 
import { MatMenuModule} from '@angular/material/menu';
import {MatTabsModule} from '@angular/material/tabs';
import { AssignmentsRenduComponent } from './assignments/assignments-rendu/assignments-rendu.component';
import { AssignmentsNonRenduComponent } from './assignments/assignments-non-rendu/assignments-non-rendu.component';
import { NgxPaginationModule } from 'ngx-pagination';


const routes:Routes = [
  { path: '', component: MenuComponent },
  { path: 'home', component: AssignmentsComponent, children: [
    {
      path: '',
      component: AssignmentsRenduComponent
    },
    {
      path: 'rendu',
      component: AssignmentsRenduComponent
    },

    {
      path: 'non_rendu',
      component: AssignmentsNonRenduComponent
    }
  ]}
  /*{
    // indique que http://localhost:4200 sans rien ou avec un "/" à la fin
    // doit afficher le composant AssignmentsComponent (celui qui affiche la liste)
    path:"",
    component:AssignmentsComponent
  },
  {
    // indique que http://localhost:4200 sans rien ou avec un "/" à la fin
    // doit afficher le composant AssignmentsComponent (celui qui affiche la liste)
    path:"",
    component:AssignmentsComponent,
  },

  
  {
    // idem avec  http://localhost:4200/home
    path:"home",
    component:AssignmentsComponent
  },
  /*{
    path: 'home',
    loadChildren: () => import('./assignments/assignments.module')
      .then(mod => mod.AssignmentsModule)
  },
  {
    // idem avec  http://localhost:4200/login
    path:"login",
    component:LoginComponent
  },
  {
    path:"add",
    component:AddAssignmentComponent
  },
  {
    path:"assignment/:id",
    component:AssignmentDetailComponent
  },
  {
    path:"assignment/:id/edit",
    component:EditAssigmentComponent,
    canActivate : [AuthGuard]
  }
  /*{
    path: 'home/add',
    loadChildren: () =>
      import('./assignments/assignments-one/assignments-one.module').then(
        (m) => m.AssignmentsOneModule
      ),
  },*/
]
@NgModule({
  declarations: [
    AppComponent,
    RenduDirective,
    NonRenduDirective,
    AssignmentDetailComponent,
    AddAssignmentComponent,
    EditAssigmentComponent,
    LoginComponent,
    MenuComponent,
    AssignmentsComponent,
    AssignmentsRenduComponent,
    AssignmentsNonRenduComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule, MatDividerModule, MatIconModule,
    MatFormFieldModule, MatInputModule, MatDatepickerModule,
    MatNativeDateModule, MatListModule, MatCardModule, MatCheckboxModule,
    MatSlideToggleModule,
    RouterModule.forRoot(routes), HttpClientModule,
    MatSelectModule ,ReactiveFormsModule, MatToolbarModule,
    MatMenuModule,MatTabsModule,NgxPaginationModule
    /*JwtModule.forRoot({
      config: {
        tokenGetter: function  tokenGetter() {
             return     localStorage.getItem('access_token');
        }
        
        allowedDomains: ["localhost:8081"],
        disallowedRoutes: ['http://localhost:8081/login']
      }
    })*/

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
