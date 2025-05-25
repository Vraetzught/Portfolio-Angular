import { Component } from '@angular/core';
import { ImageCarrouselComponent } from '../../ui-components';
import { ImageInfo } from '../../../interfaces';

@Component( {
   selector: 'app-hobbies-page',
   imports: [
      ImageCarrouselComponent,
   ],
   templateUrl: './hobbies-page.component.html',
   styleUrl: './hobbies-page.component.css',
} )
export class HobbiesPageComponent {
   motorcycleImages: ImageInfo[] = [
      { path: 'assets/hobbies/motorcycles/yamaha_sr125.jpg', alt: 'Yamaha SR125 2001 - mijn eerste motor' },
      { path: 'assets/hobbies/motorcycles/Honda_Pan.jpg', alt: 'Honda ST1100 Pan European 2001 - mijn eerste grote motor' },
      { path: 'assets/hobbies/motorcycles/Kawasaki2.jpg', alt: 'Kawasaki Versys 1000 GT 2018 - mijn huidige motor' },
      { path: 'assets/hobbies/motorcycles/me_on_bike.jpg', alt: 'Klaar voor een rit met de bezoekers van de Laverda Oldtimer Meeting in Hoogstraten' },
      { path: 'assets/hobbies/motorcycles/Lier_ride_MotoBE.jpg', alt: 'Tussenstop tijdens de groepsrit rondom Lier, georganiseerd door leden van de MotoBE discord groep' },
   ];

   musicImages: ImageInfo[] = [
      { path: 'assets/hobbies/music/clarinet.jpg', alt: 'Ik speelde 14 jaar klarinet in de Koninklijke Harmonie Sint Maurus in Holsbeek' },
      { path: 'assets/hobbies/music/hsm.jpg', alt: 'Jaarlijks concert van de Koninklijke Harmonie Sint Maurus van Holsbeek' },
      { path: 'assets/hobbies/music/equalizer.jpg', alt: 'Ik luister naar allerlei soorten muziek, van rustgevende atmosferische muziek, tot het zwaardere gitaarwerk.' },
      { path: 'assets/hobbies/music/Na_Fir_Bolg.jpg', alt: 'Mijn vriendin en ik op het Folkfestival Na Fir Bolg in Vorselaar' },
   ]

   muayThaiImages: ImageInfo[] = [
      { path: 'assets/hobbies/muay-thai/dvoted-logo.jpg', alt: 'Januari 2025 ben ik terug beginnen trainen, dit keer bij DVoted in Heist-o/d-Berg' },
      { path: 'assets/hobbies/muay-thai/dvoted-gym.jpg', alt: 'De nieuwe trainingsruimte van DVoted Heist-o/d-Berg' },
      { path: 'assets/hobbies/muay-thai/training-session.jpg', alt: 'Een Muay Thai trainingssessie bij DVoted Heist-o/d-Berg' },
   ]


}
