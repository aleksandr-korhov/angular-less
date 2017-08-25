import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const appRoutes: Routes = [
  // {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '', redirectTo: 'tests', pathMatch: 'full'},
  {path: 'users', loadChildren: 'app/user/user.module#UserModule'},
  {path: 'tests', loadChildren: 'app/test/test.module#TestModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
