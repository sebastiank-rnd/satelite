import {Component} from '@angular/core';

import {environment} from './../environments/environment';
import {AuthService} from './auth/auth.service';

@Component({selector: 'app-root', templateUrl: './app.component.html', styleUrls: ['./app.component.less']})
export class AppComponent {
  public token = environment.info.token;

  constructor(public auth: AuthService) {}

}
