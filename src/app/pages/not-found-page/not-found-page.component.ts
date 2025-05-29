import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-found-page',
   imports: [],
  templateUrl: './not-found-page.component.html',
  styleUrl: './not-found-page.component.css',
})
export class NotFoundPageComponent implements OnInit {
   private router = inject(Router)

   ngOnInit() {
      setTimeout(() => {
         this.router.navigate(['/']);
      }, 5000);
   }
}
