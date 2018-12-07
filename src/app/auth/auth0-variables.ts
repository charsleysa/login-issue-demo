interface AuthConfig {
  clientID: string;
  domain: string;
  callbackURL: string;
}

export const AUTH_CONFIG: AuthConfig = {
  clientID: 'xg4ttc4RWBH2YJDx1ovKZj7qO0oEIJK8',
  domain: 'myblueprint-staging.au.auth0.com',
  callbackURL: 'http://localhost:3000/callback'
};
