import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { faSolidEnvelope, faSolidSpinner } from '@ng-icons/font-awesome/solid';
import { faBrandGithub, faBrandLinkedinIn } from '@ng-icons/font-awesome/brands';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component( {
   selector: 'app-contact-page',
   imports: [
      NgIcon,
      ReactiveFormsModule,
      CommonModule,
   ],
   templateUrl: './contact-page.component.html',
   styleUrl: './contact-page.component.css',
   providers: [ provideIcons( { faSolidEnvelope, faSolidSpinner, faBrandGithub, faBrandLinkedinIn } ) ],
} )
export class ContactPageComponent implements OnInit {
   socialIcons = [
      { name: 'github', url: 'https://github.com/Vraetzught', icon: 'faBrandGithub' },
      { name: 'linkedin', url: 'https://be.linkedin.com/in/klaas-brems', icon: 'faBrandLinkedinIn' }
   ]

   contactForm!: FormGroup;
   isSubmitting = false;
   submitSuccess = false;
   submitError = false;

   constructor ( private fb: FormBuilder ) {
   }

   ngOnInit () {
      this.contactForm = this.fb.group( {
         name: [ '', Validators.required ],
         email: [ '', [ Validators.required, Validators.email ] ],
         skillSelect: [ 'Klik hier voor opties' ],
         textContent: [ '' ],
      } );

      emailjs.init( { publicKey: 'Qe9bsmw-F7DLLQ8Iw' } );
   }

   openLink ( url: string ) {
      window.open( url, '_blank' );
   }

   onSubmit () {
      if ( this.contactForm.valid ) {
         this.isSubmitting = true;
         this.submitSuccess = false;
         this.submitError = false;

         emailjs.send( 'default_service', 'template_z6i5peh', {
            name: this.contactForm.value.name,
            email: this.contactForm.value.email,
            skillSelect: this.contactForm.value.skillSelect,
            textContent: this.contactForm.value.textContent,
            date: new Date().toLocaleDateString( 'nl-NL' ),
         } )
            .then( () => {
               emailjs.send( 'default_service', 'template_hto1npe', {
                  name: this.contactForm.value.name,
                  email: this.contactForm.value.email,
                  skillSelect: this.contactForm.value.skillSelect,
                  textContent: this.contactForm.value.textContent,
               } );
            } )
            .then( () => {
               this.isSubmitting = false;
               this.submitSuccess = true;
               this.contactForm.reset();
               this.contactForm.patchValue( { skillSelect: 'Klik hier voor opties' } );
            } )
            .catch( ( e ) => {
               this.isSubmitting = false;
               this.submitError = true;
               console.log( e );
            } );
      }
   }


}
