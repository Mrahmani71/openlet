import * as v from "valibot";

export const imageSchema = v.nullable(
  v.object({
    src: v.string(),
    alt: v.optional(v.string()),
    width: v.optional(v.number()),
    height: v.optional(v.number()),
    blurhash: v.optional(v.string()),
  }),
);

export const positionSchema = v.optional(
  v.picklist(["none", "featured", "hero", "breaking"]),
  "none",
);

export const statusSchema = v.picklist(["draft", "published", "archived"], "draft");
