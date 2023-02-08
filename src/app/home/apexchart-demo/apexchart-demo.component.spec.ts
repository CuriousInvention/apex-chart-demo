import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApexchartDemoComponent } from './apexchart-demo.component';

describe('ApexchartDemoComponent', () => {
  let component: ApexchartDemoComponent;
  let fixture: ComponentFixture<ApexchartDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApexchartDemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApexchartDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
