import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import{AlertService} from './alert.service';
import { AlertComponent } from './alert.component';

@NgModule({
  imports: [CommonModule],
  exports: [CommonModule,AlertComponent],
  declarations: [AlertComponent]
})
export class AlertModule {
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: AlertModule,
      providers: [AlertService],
    };
  }
}