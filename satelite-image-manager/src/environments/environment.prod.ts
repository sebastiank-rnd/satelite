export const environment = {
  production: true,
  gatewayUrl: 'http://localhost:3001',
  auth0: {
    domain: 'satimisighta.auth0.com',
    clientId: 'XtI-4B1EfV_6EbKGZilSIjLTiUuy5fhR',
    audience: 'http://localhost:3001/api',
    redirect: 'http://localhost:4200/callback',
    home: 'http://localhost:4200',
    scope: 'openid profile email'
  },
  info: {
    token: '334466'
  }
};
