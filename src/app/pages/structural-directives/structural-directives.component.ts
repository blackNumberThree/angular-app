import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-structural-directives',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './structural-directives.component.html',
  styleUrl: './structural-directives.component.css',
})
export class StructuralDirectivesComponent {
  users = [
    { id: 1, name: 'call Joe', isComplete: false },

    { id: 2, name: 'Do my homework', isComplete: false },
    { id: 3, name: 'Prepare presentation', isComplete: false },
    { id: 4, name: 'send email', isComplete: false },

    { id: 5, name: 'Buy products', isComplete: false },

    { id: 6, name: 'Lunch with Mom', isComplete: false },

    { id: 7, name: 'start learning Angular', isComplete: false },
    { id: 8, name: 'Write article', isComplete: false },

    { id: 9, name: 'feed the dog', isComplete: false },

    { id: 10, name: 'go to the walk', isComplete: false },
  ];
  car = 'BMW';
}
