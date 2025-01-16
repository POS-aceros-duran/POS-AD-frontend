import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-controlar-inventario',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './controlar-inventario.component.html',
  styleUrl: './controlar-inventario.component.scss'
})
export default class ControlarInventarioComponent implements OnInit {
  pricingForm: FormGroup;
  profit: number = 0;

  constructor(private fb: FormBuilder) {
    this.pricingForm = this.fb.group({
      originalPrice: [''],
      salePrice: [''],
      //iva: ['']
    });
  }

  ngOnInit(): void {
    this.pricingForm.valueChanges.subscribe(() => {
      this.calculateProfit();
    });
  }

  calculateProfit(): void {
    const originalPrice = parseFloat(this.pricingForm.value.originalPrice) || 0;
    const salePrice = parseFloat(this.pricingForm.value.salePrice) || 0;
    //const iva = parseFloat(this.pricingForm.value.iva) || 0;

    //const originalPriceWithIva = originalPrice * (1 + iva / 100);
    //this.profit = salePrice - originalPriceWithIva;
    this.profit = salePrice - originalPrice;

  }
}
