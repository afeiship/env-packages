# env-utils
> Env utils.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
npm install @jswork/env-utils
```

## usage
```js
import { prefixedEnv } from '@jswork/env-utils';

const envs = prefixedEnv('REACT_APP_', process.env);
```

## types
```ts
/// <reference types="@jswork/env-utils/global.d.ts" />
```

## license
Code released under [the MIT license](https://github.com/afeiship/env-utils/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/env-utils
[version-url]: https://npmjs.org/package/@jswork/env-utils

[license-image]: https://img.shields.io/npm/l/@jswork/env-utils
[license-url]: https://github.com/afeiship/env-utils/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/env-utils
[size-url]: https://github.com/afeiship/env-utils/blob/master/dist/index.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/env-utils
[download-url]: https://www.npmjs.com/package/@jswork/env-utils
