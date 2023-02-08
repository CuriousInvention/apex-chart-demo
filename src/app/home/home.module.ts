import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { ApexchartDemoComponent } from './apexchart-demo/apexchart-demo.component';


@NgModule({
  declarations: [
    HelloWorldComponent,
    ApexchartDemoComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
