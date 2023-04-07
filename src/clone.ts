export type JsonPrimitive = number | string | boolean | null;
export type JsonObject = JsonValue[] | { [key: string]: JsonValue };
export type JsonValue = JsonPrimitive | JsonObject;

/**
 * Creates a deep clone of a JSON value.
 */
export function cloneJson(x: JsonValue): JsonValue {
    return typeof x !== 'object' || x === null ? x : cloneJsonObject(x);
}

/**
 * Creates a deep clone of a JSON object.
 * Only array or object can be specified.
 */
export function cloneJsonObject(x: JsonObject): JsonObject {
    if (Array.isArray(x)) {
        const ret: JsonValue[] = Array(x.length);
        let i = 0;
        for (const e of x) {
            ret[i++] = typeof e !== 'object' || e === null ? e : cloneJsonObject(e);
        }
        return ret;
    } else {
        const ret: { [key: string]: JsonValue } = {};
        for (const k in x) {
            const v = x[k];
            ret[k] = typeof v !== 'object' || v === null ? v : cloneJsonObject(v);
        }
        return ret;
    }
}
