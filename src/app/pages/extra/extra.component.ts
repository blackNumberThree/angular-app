import { Component, DoCheck, OnChanges, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-extra-component',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './extra.component.html',
  styleUrl: './extra.component.css',
})
export class ExtraComponent implements OnInit, DoCheck {
  changedText = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.';
  simpleText = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.';
  changeSimpleText(simpleParam: string) {
    this.simpleText = simpleParam;
  }
  deleteElement(elem: any) {
    elem.remove();
  }
  // ngOnChanges(): void {
  //   console.log('changes works');
  // }
  ngOnInit() {
    console.log('Component init');
  }
  ngDoCheck(): void {
    console.log('we checked component ');
  }
}
