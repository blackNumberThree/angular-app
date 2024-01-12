import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { PipesComponent } from './pages/pipes/pipes.component';
import { StructuralDirectivesComponent } from './pages/structural-directives/structural-directives.component';
import { DataBindingComponent } from './pages/data-binding/data-binding.component';
import { ExtraComponent } from './pages/extra/extra.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [
    CommonModule,
    RouterOutlet,
    PipesComponent,
    StructuralDirectivesComponent,
    DataBindingComponent,
    ExtraComponent,
  ],
})
export class AppComponent {
  today = Date.now();
  currency = 0.15;
  title = 'angular-app';
}
