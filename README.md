# pkgversion

![NPM Version](https://img.shields.io/npm/v/%40stabldev%2Fpkgversion?style=flat-square)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/%40stabldev%2Fpkgversion?style=flat-square)
![NPM Type Definitions](https://img.shields.io/npm/types/%40stabldev%2Fpkgversion?style=flat-square)
![NPM License](https://img.shields.io/npm/l/%40stabldev%2Fpkgversion?style=flat-square)

A tiny Node.js utility to retrieve the installed version of a package.

## Installation

```bash
npm i @stabldev/pkgversion
````

## Usage

```js
import pkgversion from "@stabldev/pkgversion"

const reactVersion = pkgversion("react")
console.log(reactVersion) // e.g., "19.1.1"
```

## API Reference

```ts
pkgversion(pkgName: string, baseDir?: string): string | null
```

* `pkgName`: The name of the installed package (e.g., `"react"`).
* `baseDir` (optional): Directory to start from (defaults to `process.cwd()`).

## License

[MIT](https://github.com/stabldev/pkgversion/blob/main/LICENSE) Copyright (c) [stabldev](https://github.com/stabldev)
