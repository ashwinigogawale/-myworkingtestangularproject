import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminAccessGuard } from './admin-access.guard';
import { AdminDeleteComponent } from './admin-delete/admin-delete.component';
import { AdminEditComponent } from './admin-edit/admin-edit.component';
import { AdminManageComponent } from './admin-manage/admin-manage.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { SettingcheckGuard } from './settingcheck.guard';
import { SuperAdminGuard } from './super-admin.guard';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'admin',loadChildren:()=>import('./admin/admin.module')
.then(mod=>mod.AdminModule)},
{path:'user',loadChildren:()=>import('./user/user.module')
.then(mod=>mod.UserModule)},
  { path: 'orders', loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule) },
  {path:'admin',canActivate:[SuperAdminGuard],
  children:[{path:'',component:AdminComponent},
  { path:'',
    canActivateChild:[AdminAccessGuard],
    children:[
    {path:'manage',component:AdminManageComponent},
  {path:'edit',component:AdminEditComponent},
  {path:'delete',component:AdminDeleteComponent}
  ]}

]},
  { path: 'settings',
  canLoad:[SettingcheckGuard],
  loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
