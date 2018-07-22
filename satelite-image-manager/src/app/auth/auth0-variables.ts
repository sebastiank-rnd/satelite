interface AuthConfig {
  CLIENT_ID: string;
  CLIENT_DOMAIN: string;
  AUDIENCE: string;
  REDIRECT: string;
  HOME: string;
  SCOPE: string;
}

export const AUTH_CONFIG: AuthConfig = {
  CLIENT_ID: '1VPraGnb1gLjP1sFZfTKa6oS5y0wpz0z',
  CLIENT_DOMAIN: 'sebastiankatz.eu.auth0.com',
  AUDIENCE: 'http://localhost:3001/api/',
  REDIRECT: 'http://localhost:4200/callback',
  HOME: 'http://localhost:4200/',
  SCOPE: 'openid profile email'
};
