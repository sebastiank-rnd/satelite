export const environment = {
  production: true,
  gatewayUrl: 'https://gw.sat.imisight.net',
  auth0: {
    domain: 'satimisighta.auth0.com',
    clientId: 'XtI-4B1EfV_6EbKGZilSIjLTiUuy5fhR',
    audience: 'https://gw.sat.imisight.net',
    redirect: 'http://localhost:4200/callback',
    home: 'http://localhost:4200',
    scope: 'openid profile'
  },
  info: {
    token: '334466'
  }
};
