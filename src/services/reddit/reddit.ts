import Snoowrap, { Listing, Submission } from 'snoowrap';

export class RedditService {
  private _r: Snoowrap;

  constructor() {
    this._r = new Snoowrap({
      userAgent: 'web:reddid:v0.0.1 (by /u/_reddid)',
      clientId: 'clientId',
      clientSecret: 'clientSecret',
      refreshToken: 'refreshToken',
    });
  }

  getHot(): Promise<Listing<Submission>> {
    return this._r.getHot();
  }
}
