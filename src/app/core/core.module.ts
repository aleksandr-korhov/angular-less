import {
  ModuleWithProviders,
  NgModule,
  Optional,
  SkipSelf
} from '@angular/core';

import {CommonModule} from '@angular/common';

import {TitleComponent} from './title/title.component';
import {AdminService} from './admin.service';
import {AdminServiceConfig} from './admin.service';
import {UserService} from './user.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TitleComponent],
  exports: [TitleComponent],
  providers: [AdminService, UserService]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import it in the AppModule only');
    }
  }

  static forRoot(adminConfig: AdminServiceConfig): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        {provide: AdminServiceConfig, useValue: adminConfig}
      ]
    };
  }
}
