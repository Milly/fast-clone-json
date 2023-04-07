# Fastest JSON deep clone in JavaScript

[![deno land][deno-badge]][deno] [![npm][npm-badge]][npm] [![CI][ci-badge]][ci]
[![CC0 1.0][license-badge]][license]

[fast-clone-json][github] is a tiny library to clone [JSON][json] values in pure
JavaScript focusing on the speed. According to [the benchmark][benchmark], this
package seems the fastest among several deep-clone implementations.

```typescript
import * as assert from "https://deno.land/std@0.182.0/testing/asserts.ts";
import { cloneJson } from "https://deno.land/x/fast_clone_json@v1.1.0/clone.ts";

const value = {
  str: "hello",
  num: 42,
  array: [true, null],
  object: { str: "hello", bool: true },
};

const cloned = cloneJson(value);

assert.assertEquals(value, cloned);
assert.assertNotStrictEquals(value, cloned);
assert.assertNotStrictEquals(value.array, cloned.array);
assert.assertNotStrictEquals(value.object, cloned.object);
```

## License

This package is distributed under [CC0 1.0][license] (Public Domain). Feel free
to copy and paste the implementation directly to your project without any
copyright notice.

[github]: https://github.com/Milly/fast-clone-json/
[ci]: https://github.com/Milly/fast-clone-json/actions/workflows/ci.yml
[ci-badge]: https://github.com/Milly/fast-clone-json/actions/workflows/ci.yml/badge.svg
[deno]: https://deno.land/x/fast_clone_json
[deno-badge]: https://img.shields.io/badge/deno.land-x%2Ffast__clone__json-lightgrey?logo=deno
[npm]: https://www.npmjs.com/package/fast-clone-json
[npm-badge]: https://badge.fury.io/js/fast-clone-json.svg
[license]: https://github.com/Milly/fast-clone-json/blob/master/LICENSE
[license-badge]: https://img.shields.io/github/license/Milly/fast-clone-json
[json]: https://json.org/
[benchmark]: https://github.com/Milly/fast-clone-json/tree/master/bench#readme
