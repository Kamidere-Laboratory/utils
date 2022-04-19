import type { infer as ZodInfer, ZodIssue, ZodSchema } from "zod";

import { TypeGuardAssertionError } from "../errors/typeguard-assert-error.js";

export class TypeGuard<T extends ZodSchema> {
  constructor(public readonly schema: T) {}

  assert(value: unknown): asserts value is ZodInfer<T> {
    const parserd = this.schema.safeParse(value);
    if (parserd.success) {
      return;
    }

    throw new TypeGuardAssertionError(parserd.error);
  }

  is(value: unknown): value is ZodInfer<T> {
    const parsed = this.schema.safeParse(value);
    return parsed.success;
  }
}
