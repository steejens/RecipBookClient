import { Component } from '@angular/core';
import { faHome, faEnvelope, faPhone, faPrint } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'RecipeBookClient';
  public isMenuCollapsed = true;
  faHome = faHome;
  faEnvelope = faEnvelope;
  faPhone = faPhone;
  faPrint = faPrint;
}
