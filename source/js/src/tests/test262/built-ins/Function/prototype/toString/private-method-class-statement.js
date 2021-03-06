// |reftest| shell-option(--enable-private-methods) skip-if(!xulRuntime.shell) -- requires shell-options
// Copyright (C) 2019 Kubilay Kahveci (Bloomberg LP). All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: Function.prototype.toString on a private method
features: [class-methods-private]
includes: [nativeFunctionMatcher.js]
---*/

class C {
  /* before */#f /* a */ ( /* b */ ) /* c */ { /* d */ }/* after */
  assert(expected) {
    assertToStringOrNativeFunction(this.#f, expected);
  }
}

let c = new C();
c.assert("#f /* a */ ( /* b */ ) /* c */ { /* d */ }");

reportCompare(0, 0);
