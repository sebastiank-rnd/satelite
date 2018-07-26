import { Component, OnInit } from '@angular/core';

import { environment } from './../environments/environment';
import { AuthService } from './auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']})
export class AppComponent implements OnInit {
  public token = environment.info.token;

  constructor(public auth: AuthService, private router: Router) {}

  ngOnInit() {
    if (this.auth.authenticated) {
       this.router.navigate(['/upload']);
    }
  }
}
