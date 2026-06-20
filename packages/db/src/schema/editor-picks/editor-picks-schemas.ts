import { createSelectSchema } from "drizzle-orm/valibot";
import { editorPicks } from "./editor-picks-table";

export const editorPickSchema = createSelectSchema(editorPicks);
