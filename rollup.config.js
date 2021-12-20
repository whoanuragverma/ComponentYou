import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import postcss from "rollup-plugin-postcss";

const packageJson = require("./package.json");

export default [
    {
        input: "src/components/index.css",
        output: {
            file: "dist/index.css",
            format: "es",
        },
        plugins: [
            postcss({
                extensions: [".css"],
                extract: true,
                modules: false,
                config: {
                    path: "./postcss.config.js",
                },
            }),
        ],
    },
    {
        input: "src/index.ts",
        external: ["react", "react-dom"],
        output: [
            {
                file: packageJson.main,
                format: "cjs",
                sourcemap: true,
            },
            {
                file: packageJson.module,
                format: "esm",
                sourcemap: true,
            },
        ],
        watch: {
            include: ["src/**/*.ts", "src/**/*.tsx", "src/**/*.css"],
        },
        plugins: [
            resolve(),
            commonjs(),
            typescript({ tsconfig: "./tsconfig.json" }),
        ],
    },
    {
        input: "dist/esm/types/index.d.ts",
        output: [{ file: "dist/index.d.ts", format: "esm" }],
        plugins: [dts()],
    },
];
