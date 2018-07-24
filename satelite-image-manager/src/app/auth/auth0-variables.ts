interface AuthConfig {
  CLIENT_ID: string;
  CLIENT_DOMAIN: string;
  AUDIENCE: string;
  REDIRECT: string;
  HOME: string;
  SCOPE: string;
}

export const AUTH_CONFIG: AuthConfig = {
  CLIENT_ID: 'XtI-4B1EfV_6EbKGZilSIjLTiUuy5fhR',
  CLIENT_DOMAIN: 'satimisighta.auth0.com',
  AUDIENCE: 'http://localhost:3001/api/',
  REDIRECT: 'http://localhost:4200/callback',
  HOME: 'http://localhost:4200/',
  SCOPE: 'openid profile email'
};
