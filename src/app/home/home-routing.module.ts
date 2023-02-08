import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApexchartDemoComponent } from './apexchart-demo/apexchart-demo.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';

const routes: Routes = [
  {path: 'home/helloworld',component: HelloWorldComponent},
  {path: 'home/apexchart',component: ApexchartDemoComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
