# Fastest JSON deep clone in JavaScript

[![deno land][deno-badge]][deno] [![npm][npm-badge]][npm] [![CI][ci-badge]][ci]
[![CC0 1.0][license-badge]][license]

This project is based on
[fast-json-clone](https://www.npmjs.com/package/fast-json-clone).

[fast-clone-json][npm] is a tiny library to clone [JSON][json] values in pure
JavaScript focusing on the speed. According to [the benchmark](./bench), this
package seems the fastest among several deep-clone implementations.

```javascript
import * as assert from "assert";
import { cloneJson } from "fast-clone-json";

const value = {
  str: "hello",
  num: 42,
  array: [true, null],
  object: { str: "hello", bool: true },
};

const cloned = cloneJson(value);

assert.deepStrictEqual(value, cloned);
assert.notStrictEqual(value, cloned);
assert.notStrictEqual(value.array, cloned.array);
assert.notStrictEqual(value.object, cloned.object);
```

## Installation

This package is licensed with CC0-1.0. Directly copy
[src/clone.ts](./src/clone.ts) to your project.

Or install via [npm](https://npmjs.com/) package manager.

```sh
npm install --save fast-clone-json
```

## API

This package exports `cloneJson()` and `cloneJsonObject()` functions.

```javascript
cloneJson(x: JsonValue): JsonValue;
```

This function clones the given JSON value and returns it. There are some
invariants for the parameter:

- The parameter must not contain circles as JSON does not allow it. This
  function will cause infinite loop for such values by design.
- The parameter must contain JSON values only. Other values like `Date`,
  `Regexp`, `Map`, `Set`, `Buffer`, ... are not allowed.

```javascript
cloneJsonObject(x: JsonObject): JsonObject;
```

This function clones the given JSON object and returns it. There are additional
invariants for the parameter:

- All invariants of `cloneJson()`.
- Directly specified parameters must be arrays or objects. Primitive values such
  as `string` cannot be specified.

## Benchmark

Here is the benchmark result with large (1.2MB) JSON value. This package is the
fastest among the implementations. Please see [the benchmark directory](./bench)
for more details and other results.

![Performance large](https://raw.githubusercontent.com/wiki/Milly/fast-clone-json/bench/large.png)

```
Native structuredClone             x 104 ops/sec ±0.40% (76 runs sampled)
structuredClone polyfill           x 105 ops/sec ±0.59% (77 runs sampled)
JSON serialize/deserialize         x 98.93 ops/sec ±0.69% (72 runs sampled)
Naive deep clone                   x 208 ops/sec ±0.18% (88 runs sampled)
lodash.clonedeep                   x 123 ops/sec ±2.42% (80 runs sampled)
clone-deep                         x 194 ops/sec ±0.38% (89 runs sampled)
rfdc (default)                     x 481 ops/sec ±0.19% (93 runs sampled)
rfdc (proto)                       x 551 ops/sec ±0.26% (92 runs sampled)
fastest-json-copy                  x 561 ops/sec ±0.15% (94 runs sampled)
fast-json-clone                    x 584 ops/sec ±0.15% (95 runs sampled)
fast-clone-json (cloneJson)        x 591 ops/sec ±0.24% (95 runs sampled)
fast-clone-json (cloneJsonObject)  x 592 ops/sec ±0.24% (93 runs sampled)

Fastest is fast-clone-json (cloneJsonObject),fast-clone-json (cloneJson)
```

## FAQ

### Why is this package the fastest?

Since this package is optimized for removing non-inline function calls in the
hot loop as much as possible. [rfdc][rfdc] is implemented with the same
strategy.

### Then why is this package faster than rfdc?

Since this package provides less functionalities. rfdc provides support for some
non-JSON types (`Date`, `Regexp`, ...). It increases the number of branches in
the hot loop so it causes trade-off in performance.

### Why are my benchmark results different?

You are right. Improvements in this package are minor. In some cases it may be
slower. (eg, differences in CPUs and Javascript engines.)

## License

This package is distributed under [CC0 1.0][license] (Public Domain). Feel free
to copy and paste the implementation directly to your project without any
copyright notice.

[ci]: https://github.com/Milly/fast-clone-json/actions/workflows/ci.yml
[ci-badge]: https://github.com/Milly/fast-clone-json/actions/workflows/ci.yml/badge.svg
[deno]: https://deno.land/x/fast-clone-json
[deno-badge]: https://img.shields.io/badge/deno.land-x%2Ffast--clone--json-lightgrey?logo=deno
[npm]: https://www.npmjs.com/package/fast-clone-json
[npm-badge]: https://badge.fury.io/js/fast-clone-json.svg
[license]: https://github.com/Milly/fast-clone-json/blob/master/LICENSE
[license-badge]: https://img.shields.io/github/license/Milly/fast-clone-json
[json]: https://json.org/
[rfdc]: https://github.com/davidmarkclements/rfdc
[benchmark]: https://github.com/Milly/fast-clone-json/tree/master/bench#readme
