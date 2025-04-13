// eslint.config.mjs
import js from "@eslint/js";
import security from "eslint-plugin-security";
import globals from "globals";

export default [
    {
        ignores: [
            "node_modules/",
            "dist/",
        ],
    },

    {
        files: ["**/*.js", "**/*.mjs"],
        languageOptions: {
            ecmaVersion: "latest",
            sourceType: "module",
            globals: {
                ...globals.node,
            },
        },
        ...js.configs.recommended,
    },

    {
        files: ["**/*.js", "**/*.mjs"],
        plugins: {
            security: security,
        },
        rules: {
            ...security.configs.recommended.rules,

        },
    },

    {
        files: ["eslint.config.mjs"],
        languageOptions: {
            sourceType: "module",
            globals: {
                ...globals.node,
            }
        }
    }
];
