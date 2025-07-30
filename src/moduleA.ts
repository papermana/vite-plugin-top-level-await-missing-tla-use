import { helloWorld as helloWorldBase } from "./moduleB.ts";

import("./moduleC.ts").then(() => {});

export const helloWorld = `${helloWorldBase}!`;
