import { test } from "node:test";
import assert from "node:assert";

import {
  add,
  subtract,
  multiply,
  divide,
  isEven
} from "./calculator.js";


test("add laskee kaksi lukua yhteen", () => {
  const result = add(2, 3);

  assert.strictEqual(result, 5);
});
