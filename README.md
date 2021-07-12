<!--
 * @Author: 王立品
 * @Date: 2021-07-08 23:47:46
 * @LastEditTime: 2021-07-12 12:51:36
 * @FilePath: \vue3.0-vite.20-element-plus\README.md
-->
# Vue 3 + Typescript + Vite

This template should help get you started developing with Vue 3 and Typescript in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur). Make sure to enable `vetur.experimental.templateInterpolationService` in settings!

### If Using `<script setup>`

[`<script setup>`](https://github.com/vuejs/rfcs/pull/227) is a feature that is currently in RFC stage. To get proper IDE support for the syntax, use [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar) instead of Vetur (and disable Vetur).

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can use the following:

### If Using Volar

Run `Volar: Switch TS Plugin on/off` from VSCode command palette.

### If Using Vetur

1. Install and add `@vuedx/typescript-plugin-vue` to the [plugins section](https://www.typescriptlang.org/tsconfig#plugins) in `tsconfig.json`
2. Delete `src/shims-vue.d.ts` as it is no longer needed to provide module info to Typescript
3. Open `src/main.ts` in VSCode
4. Open the VSCode command palette 5. Search and run "Select TypeScript version" -> "Use workspace version"

### prettier.config.js 设置格式化规则

### vsCode 编辑器中string.json中设置一下代码，可以手动格式化当前页代码
"editor.tabSize": 2,
    "todo-tree.general.tags": [
        "BUG",
        "HACK",
        "FIXME",
        "TODO",
        "XXX",
        "[ ]",
        "[x]"
    ],
    "todo-tree.regex.regex": "(//|#|<!--|;|/\\*|^|^\\s*(-|\\d+.))\\s*($TAGS)",
    "[typescript]": {
        "editor.defaultFormatter": "vscode.typescript-language-features"
    },
    "[javascript]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    {
      1. 关闭codeActionsOnSave的格式代码
      "editor.codeActionsOnSave": {
          "source.fixAll.eslint": true // For eslint
      }
    
      2. 更改为如下方式格式代码
      "eslint.format.enable": true, // 使用Eslint作为文件的一种格式规范
      "[javascript]": {
          "editor.defaultFormatter": "dbaeumer.vscode-eslint" // 格式规范由prettier改为eslint
      },
      "[vue]": {
          "editor.defaultFormatter": "dbaeumer.vscode-eslint" // 格式规范由prettier改为eslint
      }
    }]