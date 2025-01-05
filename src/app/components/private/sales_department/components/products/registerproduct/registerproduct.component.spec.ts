import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterproductComponent } from './registerproduct.component';

describe('RegisterproductComponent', () => {
  let component: RegisterproductComponent;
  let fixture: ComponentFixture<RegisterproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterproductComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
