import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlarInventarioComponent } from './controlar-inventario.component';

describe('ControlarInventarioComponent', () => {
  let component: ControlarInventarioComponent;
  let fixture: ComponentFixture<ControlarInventarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ControlarInventarioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ControlarInventarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
