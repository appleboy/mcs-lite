# MCS Lite [![CircleCI](https://circleci.com/gh/evenchange4/mcs-lite/tree/master.svg?style=svg&circle-token=c633ab2d85927871bccf4c39d676ce242f2da24c)](https://circleci.com/gh/evenchange4/mcs-lite/tree/master) [![codecov](https://codecov.io/gh/evenchange4/mcs-lite/branch/master/graph/badge.svg?token=r9HT3Wivr0)](https://codecov.io/gh/evenchange4/mcs-lite)

-   Try it online - http://mcs-lite-ui.netlify.com/
-   Try it online - http://mcs-lite-mobile-web.netlify.com/

* [Developer Guide](./docs/README.md)


## Requirements

-   node >= 7.5.0
-   npm >= 4.1.2

## Packages

| **Package**                 | **Description**                             | **Version** | **Dependencies** |
|-----------------------------|---------------------------------------------| | |
| `babel-preset-mcs-lite`     | Babel config                                | | |
| `eslint-config-mcs-lite`    | JS coding style                             | | |
| `mcs-lite-demo-nextjs`      | Demo how to use mcs-lite-ui.                | | |
| `mcs-lite-design`           | The source files to be compressed.          | | |
| `mcs-lite-fetch-rx`         | The Client api with stream creator.         | | |
| `mcs-lite-icon`             | Convert svg to react components.            | | |
| `mcs-lite-mobile-web`       | MCS Lite mobile website project.            | | |
| `mcs-lite-scripts`          | Shared scripts and some CLI `bin` files.    | | |
| `mcs-lite-theme`            | Defined `Theme` object and color helpers.   | | |
| `mcs-lite-ui`               | MCS Lite common UI and storybook demo page. | | |
| `react-intl-cra`            | Alias for `extract-messages`.               | | |
| `stylelint-config-mcs-lite` | CSS coding style                            | | |

## Install

```
$ npm i mcs-lite-ui mcs-lite-icon mcs-lite-theme --save
```

## Development

```
$ npm install # Install all external dependencies of each package.
```

```
$ npm run clean # Remove all node_modules
```

## Building all mono-packages

```
# design => icon => theme => ui
$ ./tasks/build.sh
```

## Testing

```
$ ./tasks/test.sh
```

## mcs-lite-ui

### Development

```
$ npm start
```

### Testing

```
$ npm run test:watch
```


## NPM Scipts Interface

| **Package**                 | clean | test | start | build | lint          |
|-----------------------------|-------|------|-------|-------|---------------|
| root                        | V     |      |       |       | V (es, style) |
| `babel-preset-mcs-lite`     |       | V    |       |       |               |
| `eslint-config-mcs-lite`    |       | V    |       |       |               |
| `mcs-lite-demo-nextjs`      |       |      | V     |       |               |
| `mcs-lite-design`           | V     |      |       | V     |               |
| `mcs-lite-fetch-rx`         | V     |      |       | V     |               |
| `mcs-lite-icon`             | V     |      |       | V     |               |
| `mcs-lite-mobile-web`       | V     | V    | V     | V     |               |
| `mcs-lite-scripts`          | V     |      |       | V     |               |
| `mcs-lite-theme`            | V     |      |       | V     |               |
| `mcs-lite-ui`               | V     | V    | V     | V     | V (flow)      |
| `react-intl-cra`            |       |      |       |       |               |
| `stylelint-config-mcs-lite` |       | V    |       |       |               |

## npm-check-updates

```
$ npm run ncu # check for all packages
$ npm run ncu-update # update packages.json
```

## Team

[![Michael Hsu](https://avatars.githubusercontent.com/u/1527371?v=3&s=96)](https://github.com/evenchange4) | [![Abel Chen](https://avatars.githubusercontent.com/u/2841286?v=3&s=96)](https://github.com/cettoana) | [![Abby Chiu](https://avatars.githubusercontent.com/u/11768650?v=3&s=96)](https://github.com/abby1002) | [![Daria Chen](https://avatars.githubusercontent.com/u/1300728?v=3&s=96)](https://github.com/dariachen) | [![blue chen](https://avatars.githubusercontent.com/u/1887942?v=3&s=96)](https://github.com/iamblue)
---|---|---|---|---|
Michael Hsu | Abel Chen | Abby Chiu | Daria Chen| blue chen
[@evenchange4](https://github.com/evenchange4) | [@cettoana](https://github.com/cettoana) | [@abby1002](https://github.com/abby1002) | [@dariachen](https://github.com/dariachen) | [@iamblue](https://github.com/iamblue)
[@evenchange4](https://twitter.com/evenchange4) | | | |
