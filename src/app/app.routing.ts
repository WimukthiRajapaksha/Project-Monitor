import { Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './userProfile/userProfile.component';
import { ProjectsComponent } from './projectList/projects.component';
import { TypographyComponent } from './typography/typography.component';
import { SubmissionsComponent } from './submissions/submissions.component';
import { GroupActivityComponent } from './groupActivity/groupActivity.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';

export const AppRoutes: Routes = [
  {path: '', component: MainComponent,  children: [
  // {path: 'dashboard', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: '', component: DashboardComponent},
  {path: 'user_profile', component: UserProfileComponent},
  {path: 'project_list', component: ProjectsComponent},
  {path: 'submissions', component: SubmissionsComponent},
  {path: 'group_activity', component: GroupActivityComponent},
  {path: 'notifications', component: NotificationsComponent}
]},
{path: 'login', component: LoginComponent}
// {path: '**', component: NotfoundComponent}
    // { path: 'dashboard', title: 'Dashboard',  icon: 'ti-panel', class: '' },
    // { path: 'user_profile', title: 'User Profile',  icon:'ti-userProfile', class: '' },
    // { path: 'project_list', title: 'Project List',  icon:'ti-view-list-alt', class: '' },
    // // { path: 'typography', title: 'Typography',  icon:'ti-text', class: '' },
    // { path: 'submissions', title: 'Submissions',  icon:'ti-pencil-alt2', class: '' },
    // { path: 'group_activity', title: 'Group Activity',  icon:'ti-map', class: '' },
    // { path: 'notifications', title: 'Notifications',  icon:'ti-bell', class: '' },
]

// Routes = [
//   {path: '', component: HomeComponent,  children: [
//     {path: 'invoice', component: InvoiceComponent},
//     {path: 'invoice/:no', component: InvoicedetailComponent},
//     {path: 'statistic', component: StaticsComponent},
//     {path: 'supplier', component: SupplierComponent},
//     {path: 'userProfile', component: UserComponent},
//     {path: 'userProfile/:id', component: UserdetailComponent},
//     {path: 'expense', component: ExpanceComponent}
//   ]},
//   {path: 'login', component: LoginformComponent},
//   {path: '**', component: NotfoundComponent}
// ]
