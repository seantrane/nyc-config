/**
 * Release configuration for the monorepo
 *
 * Workaround to handle `semantic-release-monorepo` multipublishing.
 *
 * Resolve problems:
 * 1. `semantic-release` does not support lerna-based repos aka monorepos out of box.
 * 2. `semantic-release-monorepo` can not release several packages at once:
 *    after the first sub-release it appends a new git version tag,
 *    so any next run finds no changes.
 *
 * For more info;
 * - https://github.com/qiwi/semantic-release-monorepo-hooks
 * - https://github.com/Updater/semantic-release-monorepo
 * - https://github.com/lerna/lerna
 */
const hooks = require('semantic-release-monorepo-hooks');
const output = hooks();

const publish = output.isLastModified
  ? [
    {
      path: '@semantic-release/exec',
      cmd: 'echo "Execute publish/deploy commands and scripts"'
    },
    '@semantic-release/npm',
    '@semantic-release/github'
  ]
  : [
    '@semantic-release/github'
  ];

module.exports = {
  branch: 'master',
  tagFormat: 'v${version}',
  /**
   * Reduce expensive network calls (50%+ runtime reduction)
   * By default, semantic-release's verifyConditions plugin configuration contains
   * @semantic-release/npm and @semantic-release/github. These two plugins each make
   * a network call to verify that credentials for the respective services are properly
   * configured. When running in a monorepo, these verifications will be redundantly
   * repeated for each and every package, greatly contributing to overall runtime.
   * Optimally, we'd only want make these verification calls one time.
   *
   * By moving these plugins to the verifyRelease configuration, they will only run
   * if semantic-release determines a release is to be made for a given package
   * (at a time when the given verifications are actually relevant).
   * Likely, most times semantic-release is run over a monorepo, only a small subset
   * of all packages trigger releases.
   */
  verifyConditions: [],
  verifyRelease: [
    '@semantic-release/changelog',
    '@semantic-release/git',
    '@semantic-release/github',
    '@semantic-release/npm'
  ]
    .map(require)
    .map(x => x.verifyConditions),
  prepare: [
    {
      path: '@semantic-release/changelog',
      changelogTitle: '# CHANGELOG'
    },
    '@semantic-release/npm',
    {
      'path': '@semantic-release/git',
      'message': 'chore(' + output.package + '): release ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}'
    }
  ],
  publish: publish,
  // success: [
  //   '@semantic-release/github'
  // ],
  // fail: [
  //   '@semantic-release/github'
  // ],
  monorepo: {
    analyzeCommits: [
      '@semantic-release/commit-analyzer'
    ],
    generateNotes: [
      '@semantic-release/release-notes-generator'
    ]
  }
};
