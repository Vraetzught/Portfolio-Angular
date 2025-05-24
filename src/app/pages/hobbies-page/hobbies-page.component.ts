import { Component } from '@angular/core';
import { ImageCarrouselComponent } from '../../ui-components/image-carrousel/image-carrousel.component';

@Component( {
   selector: 'app-hobbies-page',
   imports: [
      ImageCarrouselComponent,
   ],
   templateUrl: './hobbies-page.component.html',
   styleUrl: './hobbies-page.component.css',
} )
export class HobbiesPageComponent {
   motorcycleImages: { path: string, alt: string }[] = [
      { path: 'assets/hobbies/motorcycles/yamaha_sr125.jpg', alt: 'Yamaha SR125 2001 - mijn eerste motor' },
      { path: 'assets/hobbies/motorcycles/Honda_Pan.jpg', alt: 'Honda ST1100 Pan European 2001 - mijn eerste grote motor' },
      { path: 'assets/hobbies/motorcycles/Kawasaki2.jpg', alt: 'Kawasaki Versys 1000 GT 2018 - mijn huidige motor' },
      { path: 'assets/hobbies/motorcycles/me_on_bike.jpg', alt: 'Klaar voor een rit met de bezoekers van de Laverda Oldtimer Meeting in Hoogstraten' },
      { path: 'assets/hobbies/motorcycles/Lier_ride_MotoBE.jpg', alt: 'Tussenstop tijdens de groepsrit rondom Lier, georganiseerd door leden van de MotoBE discord groep' },
   ];


}
