import { createEnv } from "@t3-oss/env-core";
import dotenv from "dotenv";
import * as v from "valibot";

dotenv.config({
  path: "../../apps/web/.env",
});

export const env = createEnv({
  server: {},
  clientPrefix: "VITE_",
  client: {
    VITE_SITE_URL: v.pipe(v.string(), v.url()),
  },
  runtimeEnv: (import.meta as any).env,
  emptyStringAsUndefined: true,
});
