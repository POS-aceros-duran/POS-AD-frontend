import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoM3Component } from './demo-m3.component';

describe('DemoM3Component', () => {
  let component: DemoM3Component;
  let fixture: ComponentFixture<DemoM3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemoM3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemoM3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
