import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID, effect, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckbox } from '@angular/material/checkbox';
import { MatOption } from '@angular/material/core';
import { MatDivider } from '@angular/material/divider';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-demo-m3',
  standalone: true,
  imports: [
    MatButtonModule,
    MatDivider,
    MatIcon,
    MatCheckbox,
    MatFormField,
    MatSelectModule,
    MatLabel,
    MatOption,
  ],
  templateUrl: './demo-m3.component.html',
  styleUrls: ['./demo-m3.component.scss'],
})
export class DemoM3Component {
  darkTheme = signal(false);
  DENSITY_LEVELS = ['maximum', 0, '-1', '-2', '-3', '-4', 'minimum'];
  density = signal(1);

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    effect(() => {
      if (this.isBrowser() && this.getDocument()) {
        const body = this.getDocument()?.body;
        body?.classList.toggle('dark', this.darkTheme());
        body?.classList.toggle('', !this.darkTheme());
      }
    });

    effect(() => {
      if (this.isBrowser() && this.getDocument()) {
        // remove density-* classes
        this.getDocument()?.body.classList.forEach((className) => {
          if (className.startsWith('density-')) {
            this.getDocument()?.body.classList.remove(className);
          }
        });

        // add density-* class
        this.getDocument()?.body.classList.add(`density-${this.density()}`);
      }
    });
  }

  isBrowser(): boolean {
    return isPlatformBrowser(this.platformId);
  }

  getDocument() {
    return this.isBrowser() ? document : null;
  }
}
