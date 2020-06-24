import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-main-layoutr',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './main-layout.component.html',
  styles: [`
    nz-layout { min-height: 100vh }
    nz-header { height: 48px }
    ul { height: 48px; line-height: 48px !important }
    .container-fluid { max-width: 1000px }
  `]
})
export class MainLayoutComponent {
}
