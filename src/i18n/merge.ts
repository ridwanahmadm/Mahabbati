// English data is written as an overlay on the Indonesian data: same shape, text fields only.
// Arrays merge by position, objects by key; anything the overlay leaves out keeps the Indonesian value
// (prices, ids, photos, numbers).

export type Overlay<T> = T extends string | number | boolean
  ? T
  : T extends readonly (infer U)[]
    ? (Overlay<U> | undefined)[]
    : { [K in keyof T]?: Overlay<T[K]> };

export function merge<T>(base: T, over: Overlay<T> | undefined): T {
  if (over === undefined || over === null) return base;
  if (Array.isArray(base)) {
    const o = over as unknown[];
    return base.map((b, i) => merge(b, o[i] as never)) as T;
  }
  if (typeof base === "object" && base !== null) {
    const out: Record<string, unknown> = { ...(base as Record<string, unknown>) };
    for (const [k, v] of Object.entries(over as Record<string, unknown>)) {
      out[k] = merge((base as Record<string, unknown>)[k], v as never);
    }
    return out as T;
  }
  return over as T;
}
