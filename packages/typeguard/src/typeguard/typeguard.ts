import type { ZodSchema } from "zod";

import { TypeGuardAssertionError } from "../errors/typeguard-assert-error.js";

export class TypeGuard<T> {
  constructor(public readonly schema: ZodSchema) {}

  assert(value: unknown): asserts value is T {
    const parserd = this.schema.safeParse(value);
    if (parserd.success) {
      return;
    }

    throw new TypeGuardAssertionError(parserd.error);
  }

  is(value: unknown): value is T {
    const parsed = this.schema.safeParse(value);
    return parsed.success;
  }
}
