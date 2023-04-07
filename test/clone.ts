import { notStrictEqual, deepStrictEqual } from 'assert';
import * as path from 'path';
import { cloneJson, cloneJsonObject, type JsonObject, type JsonValue } from '../src/clone.js';

function checkCloneJson(data: JsonValue): void {
    const cloned = cloneJson(data);
    if (typeof data === 'object' && data !== null) {
        notStrictEqual(cloned, data);
    }
    deepStrictEqual(cloned, data);
}

function checkCloneJsonObject(data: JsonObject): void {
    const cloned = cloneJsonObject(data);
    if (typeof data === 'object') {
        notStrictEqual(cloned, data);
    }
    deepStrictEqual(cloned, data);
}

describe('cloneJson', function () {
    const params: JsonValue[] = [
        null,
        '',
        'abc',
        0,
        -123456,
        true,
        [],
        [1, '', true, null],
        {},
        { num: 1, str: 'a', bool: true, null: null },
        [[[[]]]],
        { a: { b: { c: { d: {} } } } },
        { a: [{ b: [{ c: [{ d: [] }] }] }] },
    ];

    for (const param of params) {
        it(`should clone ${JSON.stringify(param)}`, function () {
            checkCloneJson(param);
        });
    }

    it('should clone package.json', function () {
        const data = require(path.join(path.dirname(__dirname), 'package.json'));
        checkCloneJson(data);
    });

    it('should clone large JSON data', function () {
        const data = require(path.join(path.dirname(__dirname), 'testdata', 'large.json'));
        checkCloneJson(data);
    });
});

describe('cloneJsonObject', function () {
    const params: JsonObject[] = [
        [],
        [1, '', true, null],
        {},
        { num: 1, str: 'a', bool: true, null: null },
        [[[[]]]],
        { a: { b: { c: { d: {} } } } },
        { a: [{ b: [{ c: [{ d: [] }] }] }] },
    ];

    for (const param of params) {
        it(`should clone ${JSON.stringify(param)}`, function () {
            checkCloneJsonObject(param);
        });
    }

    it('should clone package.json', function () {
        const data = require(path.join(path.dirname(__dirname), 'package.json'));
        checkCloneJsonObject(data);
    });

    it('should clone large JSON data', function () {
        const data = require(path.join(path.dirname(__dirname), 'testdata', 'large.json'));
        checkCloneJsonObject(data);
    });
});
