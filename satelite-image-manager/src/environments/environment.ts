export const environment = {
  production: true,
  gatewayUrl: 'https://imisight-sat.auth0.com/api/v2/',
  auth0: {
    domain: 'imisight-sat.auth0.com',
    clientId: 'KXLTbs08LtLqrbPwSgn7Ioej0aMB7tf6',
    audience: 'https://imisight-sat.auth0.com/api/v2/',
    redirect: 'http://localhost:4200/callback',
    home: 'http://localhost:4200',
    scope: 'openid profile'
  },
  info: {
    token: '334466'
  }
};
