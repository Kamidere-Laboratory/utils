import test from "ava";
import { z } from "zod";

import { TypeGuard, TypeGuardAssertionError } from "../src/main.js";

test("Should throw `TypeGuardAssertionError` error", (t) => {
  const testSchema = z.object({
    test: z.string(),
  });
  type testSchema = z.infer<typeof testSchema>;
  const testTypeGuard: TypeGuard<testSchema> = new TypeGuard(testSchema);

  const testObject = {
    test: 123,
  };

  t.throws(() => testTypeGuard.assert(testObject), {
    instanceOf: TypeGuardAssertionError,
  });
});

test("Should return `false`", (t) => {
  const testSchema = z.object({
    number1: z.number().min(5),
    number2: z.number().max(10),
    number3: z.literal(1),
  });
  type testSchema = z.infer<typeof testSchema>;
  const testTypeGuard: TypeGuard<testSchema> = new TypeGuard(testSchema);

  const testObject = {
    number1: 4,
    number2: 15,
    number3: 1,
  };

  t.false(testTypeGuard.is(testObject));
});

test("Should return `true`", (t) => {
  const testSchema = z.object({
    test: z.number(),
  });
  type testSchema = z.infer<typeof testSchema>;
  const testTypeGuard: TypeGuard<testSchema> = new TypeGuard(testSchema);

  const testObject = {
    test: 123,
  };

  t.true(testTypeGuard.is(testObject));
});

test("Should pass", (t) => {
  const testSchema = z.object({
    test: z.boolean(),
  });
  type testSchema = z.infer<typeof testSchema>;
  const testTypeGuard: TypeGuard<testSchema> = new TypeGuard(testSchema);

  const testObject = {
    test: false,
  };

  testTypeGuard.assert(testObject);
  t.pass();
});
