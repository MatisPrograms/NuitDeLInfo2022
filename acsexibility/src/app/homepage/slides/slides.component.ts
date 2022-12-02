import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-slides',
  templateUrl: './slides.component.html',
  styleUrls: ['./slides.component.scss']
})
export class SlidesComponent implements OnInit {

  private imgIndex: number = 1;
  public imagePath: string = "https://www.w3schools.com/howto/";
  public images: string[] = ["img_5terre_wide.jpg", "img_forest_wide.jpg", "img_lights_wide.jpg", "img_mountains_wide.jpg", "img_nature_wide.jpg", "img_snow_wide.jpg"];

  ngOnInit() {
    this.showSlides(this.imgIndex);
  }

  public previousImg(): void {
    this.currentSlide(this.imgIndex - 1);
  }

  public nextImg(): void {
    this.currentSlide(this.imgIndex + 1);
  }

  public currentSlide(n: number): void {
    this.showSlides(this.imgIndex = n);
  }

  public showSlides(n: number): void {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    if (n > slides.length) {
      this.imgIndex = 1
    }
    if (n < 1) {
      this.imgIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].setAttribute('style', 'display: none');
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[this.imgIndex - 1].setAttribute('style', 'display: block');
    dots[this.imgIndex - 1].className += " active";
  }
}
