import { EnvValidatex, type Constraints } from "env-validatex";

const constraints: Constraints = {
  NODE_ENV: {
    type: "enum",
    required: true,
    default: "development",
    values: ["development", "production", "test"],
  },
  DATABASE_URL: {
    type: "string",
    required: true,
  },
};

const validator = new EnvValidatex(constraints, {
  basePath: process.cwd(),
  files: [".env"],
  exitOnError: true,
  applyDefaults: true,
  silent: false,
});

validator.loadAndValidate();