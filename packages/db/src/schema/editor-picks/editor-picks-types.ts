import * as v from "valibot";

import type { editorPickSchema } from "./editor-picks-schemas";

export type EditorPick = v.InferOutput<typeof editorPickSchema>;
