import { Component, Input } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { CommonModule } from '@angular/common';
import { faSolidChevronLeft, faSolidChevronRight } from '@ng-icons/font-awesome/solid';

@Component({
  selector: 'app-image-carrousel',
   imports: [
      NgIcon,
      CommonModule
   ],
  templateUrl: './image-carrousel.component.html',
  styleUrl: './image-carrousel.component.css',
   providers: [provideIcons({faSolidChevronRight, faSolidChevronLeft})]
})
export class ImageCarrouselComponent {
   @Input() images: { path: string, alt: string }[] = [];

   currentImageIndex = 0;
   private carouselInterval: any;

   ngOnInit() {
      this.startCarousel();
   }

   ngOnDestroy() {
      this.stopCarousel();
   }

   startCarousel() {
      this.carouselInterval = setInterval(() => {
         this.nextImage();
      }, 10000);
   }

   stopCarousel() {
      if (this.carouselInterval) {
         clearInterval(this.carouselInterval);
      }
   }

   nextImage() {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;

   }

   prevImage() {
      this.currentImageIndex = (this.currentImageIndex - 1 + this.images.length) % this.images.length;
   }

   setCurrentImage(index: number) {
      this.currentImageIndex = index;
      this.stopCarousel();
      this.startCarousel();
   }
}
