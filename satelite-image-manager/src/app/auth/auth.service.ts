import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as auth0 from 'auth0-js';

import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // Create Auth0 web auth instance
  // @TODO: Update AUTH_CONFIG and remove .example extension in
  // src/app/auth/auth0-variables.ts.example
  private _Auth0 = new auth0.WebAuth({
    clientID: environment.auth0.clientId,
    domain: environment.auth0.domain,
    responseType: 'token',
    redirectUri: environment.auth0.redirect,
    audience: environment.auth0.audience,
    scope: environment.auth0.scope
  });
  accessToken: string;
  expiresAt: number;

  // Create a stream of logged in status to communicate throughout app
  loggedIn: boolean;
  loggedIn$ = new BehaviorSubject<boolean>(this.loggedIn);

  constructor() {
    // You can restore an unexpired authentication session on init
    // by using the checkSession() endpoint from auth0.js:
    // https://auth0.com/docs/libraries/auth0js/v9#using-checksession-to-acquire-new-tokens
  }

  private _setLoggedIn(value: boolean) {
    // Update login status subject
    this.loggedIn$.next(value);
    this.loggedIn = value;
  }

  login() {
    // Auth0 authorize request
    this._Auth0.authorize();
  }

  handleLoginCallback() {
    // When Auth0 hash parsed, get profile
    this._Auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken) {
        window.location.hash = '';
        this.getUserInfo(authResult);
      } else if (err) {
        console.error(`Error: ${err.error}`);
      }
    });
  }

  getUserInfo(authResult) {
    // Use access token to retrieve user's profile and set session
    this._Auth0.client.userInfo(authResult.accessToken, (err, profile) => {
      this._setSession(authResult, profile);
    });
  }

  private _setSession(authResult, profile) {
    // Save session data and update login status subject
    this.expiresAt = authResult.expiresIn * 1000 + Date.now();
    this.accessToken = authResult.accessToken;
    this._setLoggedIn(true);
  }

  logout() {
    this._Auth0.logout({
      returnTo: environment.auth0.home,
      clientID: environment.auth0.clientId
    });
  }

  get authenticated(): boolean {
    // Check if current date is greater than
    // expiration and user is currently logged in
    const OK: boolean = (Date.now() < this.expiresAt) && this.loggedIn;
    return OK;
  }

}
