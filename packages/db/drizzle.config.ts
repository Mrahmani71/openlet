import { env as envServer } from "@openlet/env/env-admin-server";
import { env as envClient } from "@openlet/env/env-web-server";
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./src/schema/index.ts",
  out: "./src/.migrations",
  dialect: "postgresql",
  dbCredentials: {
    url: envServer.DATABASE_URL || envClient.DATABASE_URL,
  },
});
