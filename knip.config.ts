import type { KnipConfig } from "knip";

const config: KnipConfig = {
  tags: ["-knipignore"],
  entry: ["src/**/*.d.ts", "src/app/\\(frontend\\)/contact/emails.tsx"],
  ignoreDependencies: ["@react-email/ui"],
  playwright: {
    config: ["playwright.config.ts", "playwright.prod.config.ts"],
    entry: ["**/playwright-tests/*.@(spec|test).?(c|m)[jt]s?(x)"],
  },
};

export default config;
