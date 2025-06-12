import { Component } from '@angular/core';
import { MainScreenComponent } from './main-screen.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MainScreenComponent],
  template: `<app-main-screen></app-main-screen>`,
  styleUrl: './app.component.css'
})
export class AppComponent {}
