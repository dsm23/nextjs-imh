import fs from "node:fs";
import path from "node:path";
import { parse } from "dotenv";
import { CodegenConfig } from "@graphql-codegen/cli";

/**
 * Functions copied from vite https://github.com/vitejs/vite/blob/4215e22696dfec4e030749a1ad001777bf4dc2bb/packages/vite/src/node/env.ts
 */
function tryStatSync(file: string): fs.Stats | undefined {
  try {
    return fs.statSync(file, { throwIfNoEntry: false });
  } catch {
    // Ignore errors
  }
}

export function loadEnv(envDir: string): Record<string, string> {
  const env: Record<string, string> = {};

  const mode = process.env.NODE_ENV;

  const envFiles = [
    /** default file */ `.env`,
    /** local file */ `.env.local`,
    /** mode file */ `.env.${mode}`,
    /** mode local file */ `.env.${mode}.local`,
  ];

  const parsed = Object.fromEntries(
    envFiles.flatMap((file) => {
      const filePath = path.join(envDir, file);
      if (!tryStatSync(filePath)?.isFile()) return [];

      return Object.entries(parse(fs.readFileSync(filePath)));
    }),
  );

  // only keys that start with prefix are exposed to client
  for (const [key, value] of Object.entries(parsed)) {
    env[key] = value;
  }

  // check if there are actual env variables starting with VITE_*
  // these are typically provided inline and should be prioritized
  for (const key in process.env) {
    env[key] = process.env[key] as string;
  }

  return env;
}

process.env = {
  ...process.env,
  ...loadEnv("."),
};

const config: CodegenConfig = {
  schema: {
    [`https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`]:
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
        },
      },
  },
  require: ["ts-node/register"],
  generates: {
    "./src/graphql-types/index.ts": {
      plugins: ["typescript", "typescript-operations"],
    },
  },
};

export default config;
