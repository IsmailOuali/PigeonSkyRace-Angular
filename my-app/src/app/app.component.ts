import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
  <h1>Welcome to my Component</h1>
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-app';
}
