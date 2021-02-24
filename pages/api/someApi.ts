/* eslint-disable @typescript-eslint/no-var-requires */
//https://github.com/zabawt/example-js/raw/main/translations.js

import { NextApiRequest, NextApiResponse } from 'next';

/**
 * Example of backend for frontend api
 * @param req 
 * @param res 
 */
export default async function handler(req: NextApiRequest, res: NextApiResponse):  Promise<void> {
  /**
   * do some fetch or other stuff pass it back via response
   */
  res.status(200).json({});
}