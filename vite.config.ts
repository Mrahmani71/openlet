import { defineConfig } from "vite-plus";

const ignorePatterns = [
  "pnpm-lock.yaml",
  "package-lock.json",
  "yarn.lock",
  "bun.lock",
  "routeTree.gen.ts",
  ".tanstack-start/",
  ".tanstack/",
  "drizzle/",
  ".migrations/",
  ".drizzle/",
  ".cache",
  "worker-configuration.d.ts",
  ".vercel",
  ".output",
  ".wrangler",
  ".netlify",
  ".tanstack/",
  ".nitro/",
  "dist",
];

const config = defineConfig({
  staged: {
    "*": "vp check --fix",
  },
  fmt: {
    tabWidth: 2,
    semi: true,
    printWidth: 100,
    singleQuote: false,
    endOfLine: "lf",
    trailingComma: "all",
    sortPackageJson: true,
    sortImports: {
      newlinesBetween: false,
      groups: [
        ["value-builtin", "value-external"],
        ["value-internal", "value-parent", "value-sibling", "value-index"],
        { newlinesBetween: true },
        "type-import",
        "unknown",
      ],
    },
    sortTailwindcss: {
      stylesheet: "./packages/ui/src/styles/base.css",
      attributes: ["class", "className"],
      functions: ["clsx", "cn", "cva", "tw"],
    },
    ignorePatterns,
  },
  lint: {
    jsPlugins: [{ name: "vite-plus", specifier: "vite-plus/oxlint-plugin" }],
    rules: { "vite-plus/prefer-vite-plus-imports": "error" },
    options: { typeAware: true, typeCheck: true },
    ignorePatterns,
  },
  run: {
    cache: true,
  },
});

export default config;
