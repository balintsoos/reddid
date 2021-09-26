import Snoowrap, { Listing, Submission } from 'snoowrap';

type RedditServiceOptions = { userAgent: string; clientId: string; clientSecret: string; refreshToken: string };
export class RedditService {
  private _r: Snoowrap;

  constructor(options: RedditServiceOptions) {
    this._r = new Snoowrap({
      userAgent: options.userAgent,
      clientId: options.clientId,
      clientSecret: options.clientSecret,
      refreshToken: options.refreshToken,
    });
  }

  getHot(): Promise<Listing<Submission>> {
    return this._r.getHot();
  }
}
