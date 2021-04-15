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
import { DeleteDialogComponent } from './delete-dialog/delete-dialog.component';
import {MatDialogModule } from '@angular/material/dialog';
import { ProfilDialogComponent } from './profil-dialog/profil-dialog.component';
const routes:Routes = [
  { path: '', component: LoginComponent },
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
  ]},
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
    AssignmentsNonRenduComponent,
    DeleteDialogComponent,
    ProfilDialogComponent
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
    MatMenuModule,MatTabsModule,NgxPaginationModule,MatCardModule,MatDialogModule
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
