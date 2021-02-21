const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase, { defaultConfig }) => {
  // if (phase === PHASE_DEVELOPMENT_SERVER) {
  //   return {
  //     uri: 'https://jsonplaceholder.typicode.com'
  //   };
  // }

  return {
    env: {
      uri: 'https://jsonplaceholder.typicode.com'
      /* config options for all phases except development here */
    }
  };
};