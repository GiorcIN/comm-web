// @ts-check

/**
 * @type {import('@nrwl/devkit').ModuleFederationConfig}
 **/

const moduleFederationConfig = {
  name: 'dashboard',
  remotes: ['reporting', 'classroom-messenger'],
};

module.exports = moduleFederationConfig;
