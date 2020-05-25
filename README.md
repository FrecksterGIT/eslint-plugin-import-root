# eslint-plugin-import-root

Checks all imports are inside the project scope.

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-import-root`:

```
$ npm install eslint-plugin-import-root --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-import-root` globally.

## Usage

Add `import-root` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "import-root"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "import-root/no-external": "error",
        "import-root/no-absolute": "error"
    }
}
```

## Supported Rules

* **import-root/no-external** Disallow relative paths leading outside of the directory containing the package.json file.
* **import-root/no-absolute** Disallow all absolute imports (starting with a /).
