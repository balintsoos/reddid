import Snoowrap, { Listing, Submission } from 'snoowrap';

export class RedditService {
  private _r: Snoowrap;

  constructor() {
    const storage = window.localStorage;
    this._r = new Snoowrap({
      userAgent: storage.getItem('userAgent') ?? '',
      clientId: storage.getItem('clientId') ?? '',
      clientSecret: storage.getItem('clientSecret') ?? '',
      refreshToken: storage.getItem('refreshToken') ?? '',
    });
  }

  getHot(): Promise<Listing<Submission>> {
    return this._r.getHot();
  }
}
