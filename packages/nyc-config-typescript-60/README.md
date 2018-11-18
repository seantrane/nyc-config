# `@seantrane/nyc-config-typescript-60`

> An [extendable istanbuljs/nyc configuration](https://github.com/istanbuljs/nyc#publish-and-reuse-your-nyc-configuration) for TypeScript, requiring 60% code coverage.

---

[![npm latest version](https://img.shields.io/npm/v/@seantrane/nyc-config-typescript-60/latest.svg)](https://www.npmjs.com/package/@seantrane/nyc-config-typescript-60) [![npm next version](https://img.shields.io/npm/v/@seantrane/nyc-config-typescript-60/next.svg)](https://www.npmjs.com/package/@seantrane/nyc-config-typescript-60) [![npm downloads per week](https://img.shields.io/npm/dw/@seantrane/nyc-config-typescript-60.svg)](https://www.npmjs.com/package/@seantrane/nyc-config-typescript-60) [![npm total downloads](https://img.shields.io/npm/dt/@seantrane/nyc-config-typescript-60.svg)](https://www.npmjs.com/package/@seantrane/nyc-config-typescript-60)

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

This package is an [extendable `nyc` configuration](https://github.com/istanbuljs/nyc#publish-and-reuse-your-nyc-configuration) for TypeScript codebases. The configuration requires at least 60% code coverage, with watermarks at 55% and 65%.

_[Learn more about `nyc` configuration](https://github.com/istanbuljs/nyc#configuring-nyc)._

## Install <a id="install"></a>

```sh
npm install -D @seantrane/nyc-config-typescript-60
```

## Usage <a id="usage"></a>

Use the `"extends": "@seantrane/nyc-config-typescript-60"` property in your `nyc` config, then add any additional configuration as required.

### Using `package.json` file:

```json
{
  "nyc": {
    "extends": "@seantrane/nyc-config-typescript-60"
  }
}
```

### Using `.nycrc` file:

```json
{
  "extends": "@seantrane/nyc-config-typescript-60"
}
```

---

## Support <a id="support"></a>

Submit an [issue](https://github.com/seantrane/nyc-config/issues/new), in which you should provide as much detail as necessary for your issue.

## Contributing <a id="contributing"></a>

Contributions are always appreciated. Read [CONTRIBUTING.md](https://github.com/seantrane/nyc-config/blob/master/CONTRIBUTING.md) documentation to learn more.

## Changelog <a id="changelog"></a>

Release details are documented in the [CHANGELOG.md](https://github.com/seantrane/nyc-config/blob/master/packages/nyc-config-typescript-60/CHANGELOG.md) file, and on the [GitHub Releases page](https://github.com/seantrane/nyc-config/releases).

---

## License <a id="license"></a>

[MIT License](https://github.com/seantrane/nyc-config/blob/master/LICENSE)

Copyright (c) 2018 [Sean Trane Sciarrone](https://github.com/seantrane)
