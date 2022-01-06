import * as functions from 'firebase-functions';

const universal =
  require(`${process.cwd()}/dist/angular-ssr2-test/server/main`).app();
exports.ssr = functions.https.onRequest(universal);
