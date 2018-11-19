# `@seantrane/nyc-config-...`

> A monorepo for [extendable istanbuljs/nyc configurations](https://github.com/istanbuljs/nyc#publish-and-reuse-your-nyc-configuration).

---

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/) [![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lernajs.io/) [![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

## Table of Contents

- [About the Repository](#about)
- [Install](#install)
- [Usage](#usage)
- [Support](#support)
- [Contributing](#contributing)
- [Changelog](#changelog)
- [License](#license)

---

## About the Repository <a id="about"></a>

This repo was created to manage shared and extendable `nyc` configurations. [`nyc`](https://github.com/istanbuljs/nyc) allows you to [inherit other configurations](https://github.com/istanbuljs/nyc#publish-and-reuse-your-nyc-configuration) using the key `extends`, where the packages managed in this repo can be used.

All default configurations require at least 85% code coverage, with watermarks at 80% and 90%. Select a configuration based on your requirements. The installation and configuration process is the same, just change the name of the configuration. _[Learn more about `nyc` configuration](https://github.com/istanbuljs/nyc#configuring-nyc)._

### Packages:

- [`@seantrane/nyc-config-typescript`](https://github.com/seantrane/nyc-config/tree/master/packages/nyc-config-typescript#readme) _(85% coverage)_
- [`@seantrane/nyc-config-typescript-90`](https://github.com/seantrane/nyc-config/tree/master/packages/nyc-config-typescript-90#readme) _(90% coverage)_
- [`@seantrane/nyc-config-typescript-80`](https://github.com/seantrane/nyc-config/tree/master/packages/nyc-config-typescript-80#readme) _(80% coverage)_
- [`@seantrane/nyc-config-typescript-70`](https://github.com/seantrane/nyc-config/tree/master/packages/nyc-config-typescript-70#readme) _(70% coverage)_
- [`@seantrane/nyc-config-typescript-60`](https://github.com/seantrane/nyc-config/tree/master/packages/nyc-config-typescript-60#readme) _(60% coverage)_

## Install <a id="install"></a>

```sh
npm install -D @seantrane/nyc-config-typescript
```

## Usage <a id="usage"></a>

Use the `"extends": "@seantrane/nyc-config-typescript"` property in your `nyc` config, then add any additional configuration as required.

### Using `package.json` file:

```json
{
  "nyc": {
    "extends": "@seantrane/nyc-config-typescript"
  }
}
```

### Using `.nycrc` file:

```json
{
  "extends": "@seantrane/nyc-config-typescript"
}
```

---

## Support <a id="support"></a>

Submit an [issue](https://github.com/seantrane/nyc-config/issues/new), in which you should provide as much detail as necessary for your issue.

## Contributing <a id="contributing"></a>

Contributions are always appreciated. Read [CONTRIBUTING.md](https://github.com/seantrane/nyc-config/blob/master/CONTRIBUTING.md) documentation to learn more.

## Changelog <a id="changelog"></a>

Release details are documented in the [CHANGELOG.md](https://github.com/seantrane/nyc-config/blob/master/CHANGELOG.md) file, and on the [GitHub Releases page](https://github.com/seantrane/nyc-config/releases).

---

## License <a id="license"></a>

[MIT License](https://github.com/seantrane/nyc-config/blob/master/LICENSE)

Copyright (c) 2018 [Sean Trane Sciarrone](https://github.com/seantrane)
