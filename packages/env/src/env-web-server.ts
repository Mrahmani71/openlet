import { createEnv } from "@t3-oss/env-core";
import dotenv from "dotenv";
import * as v from "valibot";

dotenv.config({
  path: "../../apps/web/.env",
});

export const env = createEnv({
  server: {
    DATABASE_URL: v.pipe(v.string(), v.url(), v.startsWith("postgresql://")),
  },
  runtimeEnv: process.env,
  emptyStringAsUndefined: true,
});
