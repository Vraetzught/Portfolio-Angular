import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { faSolidChevronLeft, faSolidChevronRight, faSolidXmark } from '@ng-icons/font-awesome/solid';

@Component( {
   selector: 'app-image-carrousel',
   imports: [
      NgIcon,
      CommonModule,
      NgOptimizedImage,
   ],
   templateUrl: './image-carrousel.component.html',
   styleUrl: './image-carrousel.component.css',
   providers: [ provideIcons( { faSolidChevronRight, faSolidChevronLeft, faSolidXmark } ) ],

} )

export class ImageCarrouselComponent implements OnInit, OnDestroy {
   @Input() images: { path: string, alt: string }[] = [];

   currentImageIndex = 0;
   private carouselInterval: any;

   isModalOpen = false;
   modalImageIndex = 0;

   ngOnInit () {
      this.startCarousel();
   }

   ngOnDestroy () {
      this.stopCarousel();
   }

   startCarousel () {
      this.carouselInterval = setInterval( () => {
         this.nextImage();
      }, 10000 );
   }

   stopCarousel () {
      if ( this.carouselInterval ) {
         clearInterval( this.carouselInterval );
      }
   }

   nextImage () {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;

   }

   prevImage () {
      this.currentImageIndex = (this.currentImageIndex - 1 + this.images.length) % this.images.length;
   }

   setCurrentImage ( index: number ) {
      this.currentImageIndex = index;
      this.stopCarousel();
      this.startCarousel();
   }

   openModal ( index: number ) {
      this.isModalOpen = true;
      this.modalImageIndex = index;
      this.stopCarousel();
      document.body.style.overflow = 'hidden'; // Prevent background scroll
   }

   closeModal () {
      this.isModalOpen = false;
      document.body.style.overflow = '';
      this.startCarousel();
   }

   modalNextImage () {
      this.modalImageIndex = (this.modalImageIndex + 1) % this.images.length;
   }

   modalPrevImage () {
      this.modalImageIndex = (this.modalImageIndex - 1 + this.images.length) % this.images.length;
   }
}
