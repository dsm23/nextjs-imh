import next from "@next/eslint-plugin-next";
import js from "@eslint/js";
import prettier from "eslint-config-prettier";
import * as mdx from "eslint-plugin-mdx";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import { defineConfig, globalIgnores } from "eslint/config";
import globals from "globals";
import ts from "typescript-eslint";

export default defineConfig(
  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    "coverage/**",
    "public/**",
  ]),
  {
    files: ["**/*.{js,mjs,cjs,ts,md,mdx,jsx,tsx}"],
    languageOptions: {
      globals: globals.nodeBuiltin,
      parserOptions: {
        projectService: true,
        tsconfigDirName: import.meta.dirname,
      },
    },
  },
  js.configs.recommended,
  ...ts.configs.strictTypeChecked,
  ...ts.configs.stylisticTypeChecked,
  react.configs.flat["jsx-runtime"],
  reactHooks.configs.flat.recommended,
  next.configs["core-web-vitals"],

  prettier,
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    // TODO: re-write code to not require disabling these rules
    rules: {
      "react-hooks/refs": "off",
      "react-hooks/set-state-in-effect": "off",
    },
  },
  {
    files: ["**/*.{js,md,mdx,mjs,ts,tsx}"],

    rules: {
      "@next/next/no-duplicate-head": "off",
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
  {
    files: ["!**/src/**", "**/src/stories/**"],
    ...ts.configs.disableTypeChecked,
  },
  {
    files: ["**/src/**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    rules: {
      "@typescript-eslint/consistent-type-definitions": "off",
      "@typescript-eslint/consistent-type-imports": [
        "error",
        {
          prefer: "type-imports",
        },
      ],
      "@typescript-eslint/no-confusing-void-expression": "off",
      "@typescript-eslint/no-empty-function": "off",
      "@typescript-eslint/no-misused-promises": [
        "error",
        {
          checksVoidReturn: false,
        },
      ],
      "@typescript-eslint/non-nullable-type-assertion-style": "off",
      "@typescript-eslint/restrict-template-expressions": [
        "error",
        {
          allowNumber: true,
          allowBoolean: true,
        },
      ],
      "@typescript-eslint/triple-slash-reference": [
        "error",
        {
          types: "prefer-import",
        },
      ],
      "no-console": [
        "error",
        {
          allow: ["debug", "error", "info", "trace", "warn"],
        },
      ],
    },
  },
  // temporary
  // TODO: remove these rules
  {
    files: ["**/src/**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-unsafe-argument": "off",
      "@typescript-eslint/no-unsafe-assignment": "off",
      "@typescript-eslint/no-unnecessary-condition": "off",
      "@typescript-eslint/no-unsafe-return": "off",
      "@typescript-eslint/no-unsafe-member-access": "off",
      "@typescript-eslint/prefer-nullish-coalescing": "off",
      "@typescript-eslint/no-unnecessary-type-arguments": "off",
    },
  },
  {
    // Configure.mdx
    files: ["**/*.mdx"],
    rules: {
      "react/jsx-uses-vars": "error",
    },
  },
  mdx.flat,
);
