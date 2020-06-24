import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router }                             from '@angular/router';

@Component({
  selector: 'app-welcome',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './welcome.component.html'
})
export class WelcomeComponent {

  date = new Date(2020, 5, 23);
  isInLoading: boolean;

  constructor(
    private router: Router
  ) {
  }

  onComeIn() {
    this.isInLoading = true;
    setTimeout(() => this.router.navigate(['cards']), 1000);
  }
}
