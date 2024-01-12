import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css',
})
export class DataBindingComponent implements OnInit, AfterViewInit {
  currentSlide = 0;
  img3SrcPath = './assets/cat2.jpg';
  someBorderStyle = 'inline-block';

  @ViewChild('carouselContainer')
  carouselContainer: ElementRef | any;
  slidersArray: HTMLElement[] | any;

  showSlide(index: number) {
    this.slidersArray.forEach((slide: HTMLElement, i: number) => {
      if (i === index) {
        slide.style.display = 'inline-block';
      } else {
        slide.style.display = 'none';
      }
    });
  }
  nextSlide() {
    this.currentSlide = this.currentSlide != 2 ? this.currentSlide + 1 : 0;
    this.showSlide(this.currentSlide);
  }

  prevSlide(event: Event) {
    this.currentSlide = this.currentSlide != 0 ? this.currentSlide - 1 : 2;
    this.showSlide(this.currentSlide);
  }
  ngOnInit(): void {
    console.log('OnInit');

    console.log(this.carouselContainer);
  }
  ngAfterViewInit() {
    this.slidersArray = Array.from(
      this.carouselContainer?.nativeElement.children
    );
    this.showSlide(this.currentSlide);
  }
}
