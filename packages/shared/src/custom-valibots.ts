import * as v from "valibot";

export const vMetaTitle = () => v.pipe(v.string(), v.minLength(1), v.maxLength(60));
export const vMetaDescription = () => v.pipe(v.string(), v.minLength(1), v.maxLength(160));

export const vSlug = () =>
  v.pipe(v.string(), v.nonEmpty("Please provide a slug."), v.slug("The slug is badly formatted."));

export const vCUID2 = ({ minLength = 10 }: { minLength?: number } = {}) => {
  return v.pipe(
    v.string(),
    v.cuid2("Invalid ID."),
    v.minLength(minLength, `ID must be at least ${minLength} characters.`),
  );
};

export const vCoerceDate = (errorMsg: string) => {
  return v.pipe(
    v.union([v.string(), v.number(), v.date()], errorMsg),
    v.check((input) => input !== "", errorMsg),
    v.transform((input) => new Date(input)),
    v.check((input) => !isNaN(input.getTime()), errorMsg),
  );
};
