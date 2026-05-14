import { defineConfig } from "oxlint";

export default defineConfig({
  plugins: [
    "eslint",
    "jsx-a11y",
    "nextjs",
    "oxc",
    "promise",
    "react",
    "typescript",
    "unicorn",
    "vitest",
  ],
  jsPlugins: ["eslint-plugin-better-tailwindcss"],
  categories: {
    correctness: "warn",
    suspicious: "warn",
    pedantic: "warn",
    perf: "warn",
    restriction: "warn",
    nursery: "warn",
  },
  env: {
    browser: true,
    node: true,
    serviceworker: true,
    worker: true,
  },
  ignorePatterns: [
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    "coverage/**",
  ],
  options: {
    typeAware: true,
  },
  rules: {
    "max-lines": "off",
    "max-lines-per-function": [
      "warn",
      {
        max: 200,
        skipComments: true,
        skipBlankLines: true,
      },
    ],
    "no-warning-comments": "off",
    "no-inline-comments": "off",
    "no-undefined": "off",
    "no-void": [
      "warn",
      {
        allowAsStatement: true,
      },
    ],
    "no-console": [
      "warn",
      {
        allow: ["debug", "error", "info", "trace", "warn"],
      },
    ],
    "no-empty-function": ["warn", { allow: ["arrowFunctions"] }],
    "no-negated-condition": "off",
    "no-optional-chaining": "off",
    "no-restricted-imports": [
      "warn",
      {
        paths: [
          {
            name: "react",
            importNames: ["default"],
            message:
              "Named * React import is not allowed. Please import what you need from React with Named Imports",
          },
        ],
      },
    ],
    "better-tailwindcss/enforce-canonical-classes": "warn",
    "better-tailwindcss/enforce-consistent-class-order": "warn",
    "better-tailwindcss/enforce-consistent-important-position": "warn",
    "better-tailwindcss/enforce-consistent-variable-syntax": "warn",
    "better-tailwindcss/enforce-shorthand-classes": "warn",
    "better-tailwindcss/no-conflicting-classes": "warn",
    "better-tailwindcss/no-deprecated-classes": "warn",
    "better-tailwindcss/no-duplicate-classes": "warn",
    "better-tailwindcss/no-unnecessary-whitespace": "warn",
    "better-tailwindcss/no-unknown-classes": [
      "warn",
      {
        ignore: ["elevation", "toaster"],
      },
    ],
    "jest/no-conditional-expect": "off",
    "jest/no-conditional-in-test": "off",
    "jsx-a11y/anchor-is-valid": "off",
    "jsx-a11y/anchor-has-content": "off",
    "jsx-a11y/heading-has-content": "off",
    "oxc/no-async-await": "off",
    "oxc/no-rest-spread-properties": "off",
    "react/button-has-type": "off",
    "react/forbid-component-props": "off",
    // TODO: remove when it supports tsx
    "react/jsx-filename-extension": "off",
    "react/no-multi-comp": "off",
    "react/only-export-components": "off",
    // "react/only-export-components": [
    //   "warn",
    //   {
    //     allowExportNames: [
    //       "metadata",
    //       "viewport",
    //       "generateMetadata",
    //       "generateStaticParams",
    //       "dynamic",
    //       "revalidate",
    //       "fetchCache",
    //       "runtime",
    //       "preferredRegion",
    //     ],
    //   },
    // ],
    "react/react-in-jsx-scope": "off",
    // "§tailwind-canonical-classes/tailwind-canonical-classes": [
    //   "warn",
    //   {
    //     cssPath: "./src/styles/tailwind.css",
    //   },
    // ],
    "typescript/consistent-type-imports": [
      "warn",
      {
        disallowTypeAnnotations: false,
        fixStyle: "separate-type-imports",
        prefer: "type-imports",
      },
    ],
    "typescript/explicit-function-return-type": "off",
    "typescript/explicit-module-boundary-types": "off",
    "typescript/no-confusing-void-expression": "off",
    "typescript/no-misused-promises": [
      "warn",
      {
        checksVoidReturn: false,
      },
    ],
    "typescript/no-unsafe-type-assertion": "off",
    "typescript/non-nullable-type-assertion-style": "off",
    "typescript/prefer-readonly-parameter-types": "off",
    "typescript/strict-boolean-expressions": "off",
    "typescript/strict-void-return": "off",
    "unicorn/filename-case": [
      "warn",
      {
        case: "camelCase",
        ignore: "build-sw",
      },
    ],
    "unicorn/no-negated-condition": "off",
    "vitest/consistent-vitest-vi": "warn",
    "vitest/no-conditional-expect": "off",
    "vitest/no-conditional-in-test": "off",
    "vitest/no-importing-vitest-globals": "off",
    "vitest/no-standalone-expect": [
      "warn",
      {
        additionalTestBlockFunctions: ["fc.property"],
      },
    ],
    "vitest/require-test-timeout": "off",
  },
  settings: {
    "better-tailwindcss": {
      entryPoint: "./src/styles/index.css",
    },
  },
});
