import {Component, inject} from '@angular/core'
import {NgIcon, provideIcons} from '@ng-icons/core'
import {faBrandGithub, faBrandLinkedinIn} from '@ng-icons/font-awesome/brands'
import {Router} from '@angular/router'

@Component({
  selector: 'app-footer',
  imports: [
    NgIcon,
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
  viewProviders: [provideIcons({faBrandGithub, faBrandLinkedinIn})]
})
export class FooterComponent {
  router = inject(Router)

  openLink(url: string) {
    window.open(url, '_blank')
  }


}
