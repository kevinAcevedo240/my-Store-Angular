import { Component } from '@angular/core';
import { faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  faLinkedin = faLinkedin;
  faGithub = faGithub;
  faInstagram = faInstagram;

}
