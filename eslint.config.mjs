import globals from "globals";
import pluginJs from "@eslint/js";
import prettier from "eslint-config-prettier";

export default [
  {
    languageOptions: {
      ecmaVersion: "latest", // Hỗ trợ cú pháp ES6+
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    plugins: {},
    rules: {
      "no-var": "error", // Cấm dùng var, chỉ dùng let/const
      "prefer-const": "warn",
      "no-unused-vars": "warn",
      "no-console": "off",
    },
  },
  pluginJs.configs.recommended,
  prettier,
];
