# `@seantrane/nyc-config-typescript-90`

> An [extendable istanbuljs/nyc configuration](https://github.com/istanbuljs/nyc#publish-and-reuse-your-nyc-configuration) for TypeScript, requiring 90% code coverage.

---

[![npm latest version](https://img.shields.io/npm/v/@seantrane/nyc-config-typescript-90/latest.svg)](https://www.npmjs.com/package/@seantrane/nyc-config-typescript-90) [![npm next version](https://img.shields.io/npm/v/@seantrane/nyc-config-typescript-90/next.svg)](https://www.npmjs.com/package/@seantrane/nyc-config-typescript-90) [![npm downloads per week](https://img.shields.io/npm/dw/@seantrane/nyc-config-typescript-90.svg)](https://www.npmjs.com/package/@seantrane/nyc-config-typescript-90) [![npm total downloads](https://img.shields.io/npm/dt/@seantrane/nyc-config-typescript-90.svg)](https://www.npmjs.com/package/@seantrane/nyc-config-typescript-90)

## Table of Contents

- [About the Package](#about)
- [Install](#install)
- [Usage](#usage)
- [Support](#support)
- [Contributing](#contributing)
- [Changelog](#changelog)
- [License](#license)

---

## About the Package <a id="about"></a>

This package is an [extendable `nyc` configuration](https://github.com/istanbuljs/nyc#publish-and-reuse-your-nyc-configuration) for TypeScript codebases. The configuration requires at least 90% code coverage, with watermarks at 85% and 95%.

_[Learn more about `nyc` configuration](https://github.com/istanbuljs/nyc#configuring-nyc)._

## Install <a id="install"></a>

```sh
npm install -D @seantrane/nyc-config-typescript-90
```

## Usage <a id="usage"></a>

Use the `"extends": "@seantrane/nyc-config-typescript-90"` property in your `nyc` config, then add any additional configuration as required.

### Using `package.json` file:

```json
{
  "nyc": {
    "extends": "@seantrane/nyc-config-typescript-90"
  }
}
```

### Using `.nycrc` file:

```json
{
  "extends": "@seantrane/nyc-config-typescript-90"
}
```

---

## Support <a id="support"></a>

Submit an [issue](https://github.com/seantrane/nyc-config/issues/new), in which you should provide as much detail as necessary for your issue.

## Contributing <a id="contributing"></a>

Contributions are always appreciated. Read [CONTRIBUTING.md](https://github.com/seantrane/nyc-config/blob/master/CONTRIBUTING.md) documentation to learn more.

## Changelog <a id="changelog"></a>

Release details are documented in the [CHANGELOG.md](https://github.com/seantrane/nyc-config/blob/master/packages/nyc-config-typescript-90/CHANGELOG.md) file, and on the [GitHub Releases page](https://github.com/seantrane/nyc-config/releases).

---

## License <a id="license"></a>

[MIT License](https://github.com/seantrane/nyc-config/blob/master/LICENSE)

Copyright (c) 2018 [Sean Trane Sciarrone](https://github.com/seantrane)
