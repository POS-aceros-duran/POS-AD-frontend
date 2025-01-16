import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AditionalComponent } from './aditional.component';

describe('AditionalComponent', () => {
  let component: AditionalComponent;
  let fixture: ComponentFixture<AditionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AditionalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AditionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
