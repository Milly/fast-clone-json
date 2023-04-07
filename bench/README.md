Benchmark suites for comparing multiple implementations to copy JSON value in
the following conditions.

- No circles exist in the values
- Only JSON-compatible values (null, number, string, boolean, array, object)

To run the benchmarks:

```sh
npm run bench
```

## Benchmark suites

- `LARGE`: [Large JSON value](../testdata/large.json) (1.2MB)
- `MEDIUM`: [`package.json` of this package](../package.json)
- `SMALL`: Very small hand-made JSON object
- `EMPTY`: Empty object `{}`
- `PRIMITIVE`: string `"foo"`

## Implementations

- `Native structuredClone`: Native
  [`structuredClone` function](https://developer.mozilla.org/en-US/docs/Web/API/structuredClone)
- `structuredClone polyfill`:
  [`@ungap/structured-clone` package](https://www.npmjs.com/package/@ungap/structured-clone)
- `JSON serialize/deserialize`: `JSON.parse(JSON.stringify(x))`
- `Naive deep clone`: Naive implementation of deep clone in a few lines
- `lodash.clonedeep`:
  [`lodash.clonedeep` package](https://www.npmjs.com/package/lodash.clonedeep)
- `clone-deep`: [`clone-deep` package](https://www.npmjs.com/package/clone-deep)
- `rfdc (default)`: [`rfdc` package](https://www.npmjs.com/package/rfdc) with
  default options
- `rfdc (proto)`: [`rfdc` package](https://www.npmjs.com/package/rfdc) with
  `proto` option enabled
- `fastest-json-copy`:
  [`fastest-json-copy` package](https://www.npmjs.com/package/fastest-json-copy)
- `fast-json-clone`:
  [`fast-json-clone` package](https://www.npmjs.com/package/fast-json-clone)
- `fast-clone-json (cloneJson)`: `cloneJson()` function in this package
- `fast-clone-json (cloneJsonObject)`: `cloneJsonObject()` function in this
  package

## Results

Here are the results of each benchmark suites.

- Node.js v19.8.1
- AMD Ryzen 5 3600, DDR4-3200
- Windows 10

LARGE:

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

MEDIUM:

![Performance medium](https://raw.githubusercontent.com/wiki/Milly/fast-clone-json/bench/medium.png)

```
Native structuredClone             x 81,578 ops/sec ±0.14% (97 runs sampled)
structuredClone polyfill           x 82,008 ops/sec ±0.26% (93 runs sampled)
JSON serialize/deserialize         x 72,196 ops/sec ±0.23% (94 runs sampled)
Naive deep clone                   x 240,039 ops/sec ±0.18% (97 runs sampled)
lodash.clonedeep                   x 164,617 ops/sec ±1.74% (91 runs sampled)
clone-deep                         x 278,557 ops/sec ±0.60% (93 runs sampled)
rfdc (default)                     x 352,361 ops/sec ±0.25% (93 runs sampled)
rfdc (proto)                       x 432,222 ops/sec ±0.25% (95 runs sampled)
fastest-json-copy                  x 515,137 ops/sec ±0.28% (96 runs sampled)
fast-json-clone                    x 554,264 ops/sec ±0.42% (95 runs sampled)
fast-clone-json (cloneJson)        x 586,446 ops/sec ±0.39% (97 runs sampled)
fast-clone-json (cloneJsonObject)  x 590,374 ops/sec ±0.29% (96 runs sampled)

Fastest is fast-clone-json (cloneJsonObject)
```

SMALL:

![Performance small](https://raw.githubusercontent.com/wiki/Milly/fast-clone-json/bench/small.png)

```
Native structuredClone             x 264,484 ops/sec ±0.13% (97 runs sampled)
structuredClone polyfill           x 263,526 ops/sec ±0.26% (93 runs sampled)
JSON serialize/deserialize         x 328,378 ops/sec ±0.12% (95 runs sampled)
Naive deep clone                   x 843,079 ops/sec ±0.17% (98 runs sampled)
lodash.clonedeep                   x 611,500 ops/sec ±0.28% (95 runs sampled)
clone-deep                         x 981,952 ops/sec ±0.17% (96 runs sampled)
rfdc (default)                     x 1,374,426 ops/sec ±0.24% (96 runs sampled)
rfdc (proto)                       x 1,581,322 ops/sec ±0.36% (96 runs sampled)
fastest-json-copy                  x 2,239,607 ops/sec ±0.47% (93 runs sampled)
fast-json-clone                    x 2,419,015 ops/sec ±0.29% (94 runs sampled)
fast-clone-json (cloneJson)        x 2,577,920 ops/sec ±0.56% (96 runs sampled)
fast-clone-json (cloneJsonObject)  x 2,660,198 ops/sec ±0.48% (94 runs sampled)

Fastest is fast-clone-json (cloneJsonObject)
```

EMPTY:

![Performance empty](https://raw.githubusercontent.com/wiki/Milly/fast-clone-json/bench/empty.png)

```
Native structuredClone             x 745,465 ops/sec ±0.38% (94 runs sampled)
structuredClone polyfill           x 744,742 ops/sec ±0.24% (96 runs sampled)
JSON serialize/deserialize         x 2,599,256 ops/sec ±0.46% (93 runs sampled)
Naive deep clone                   x 51,700,526 ops/sec ±1.18% (89 runs sampled)
lodash.clonedeep                   x 2,633,825 ops/sec ±0.32% (97 runs sampled)
clone-deep                         x 4,924,116 ops/sec ±0.52% (93 runs sampled)
rfdc (default)                     x 45,613,546 ops/sec ±1.44% (90 runs sampled)
rfdc (proto)                       x 45,989,107 ops/sec ±1.56% (86 runs sampled)
fastest-json-copy                  x 63,370,363 ops/sec ±2.97% (67 runs sampled)
fast-json-clone                    x 66,395,204 ops/sec ±2.47% (90 runs sampled)
fast-clone-json (cloneJson)        x 66,123,241 ops/sec ±2.52% (90 runs sampled)
fast-clone-json (cloneJsonObject)  x 68,901,612 ops/sec ±3.02% (61 runs sampled)

Fastest is fast-clone-json (cloneJsonObject)
```

PRIMITIVE:

Note that `cloneJsonObject()` that does not support primitive value will return
incorrect results.

![Performance primitive](https://raw.githubusercontent.com/wiki/Milly/fast-clone-json/bench/primitive.png)

```
Native structuredClone             x 1,157,140 ops/sec ±4.00% (94 runs sampled)
structuredClone polyfill           x 1,197,967 ops/sec ±0.31% (93 runs sampled)
JSON serialize/deserialize         x 3,520,432 ops/sec ±0.40% (93 runs sampled)
Naive deep clone                   x 145,528,825 ops/sec ±5.83% (77 runs sampled)
lodash.clonedeep                   x 60,494,817 ops/sec ±2.25% (83 runs sampled)
clone-deep                         x 52,838,995 ops/sec ±2.70% (87 runs sampled)
rfdc (default)                     x 149,337,977 ops/sec ±5.89% (79 runs sampled)
rfdc (proto)                       x 154,120,531 ops/sec ±5.32% (80 runs sampled)
fastest-json-copy                  x 161,757,158 ops/sec ±6.22% (37 runs sampled)
fast-json-clone                    x 148,543,205 ops/sec ±4.60% (83 runs sampled)
fast-clone-json (cloneJson)        x 158,504,212 ops/sec ±4.65% (84 runs sampled)
fast-clone-json (cloneJsonObject)  x 395,331 ops/sec ±0.10% (99 runs sampled)

Fastest is fastest-json-copy,fast-clone-json (cloneJson),rfdc (proto)
```
