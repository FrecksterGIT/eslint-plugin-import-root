# Make sure all imports are resolvable inside the project scope. (no-external)

## Rule Details

Relative imports have to resolve to a file inside the current projects root.
The root folder is where a package.json file is found.

Examples of **incorrect** code for this rule:
If your source file it is in the folder containing the package.json.
```js

import '../';

```

Examples of **correct** code for this rule:
If your source file it is in the folder containing the package.json.
```js

import './';

```

## When Not To Use It

If you build from folders outside your project, ie some mono-repo setups.
