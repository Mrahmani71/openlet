import { env as envServer } from "@openlet/env/env-admin-server";
import { env as envClient } from "@openlet/env/env-web-server";
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import { relations } from "./relations";

const client = postgres(envServer.DATABASE_URL || envClient.DATABASE_URL);

export const db = drizzle({
  client,
  relations,
});
