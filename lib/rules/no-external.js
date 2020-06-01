/**
 * @fileoverview Make sure all imports are resolvable inside the project scope.
 * @author Sven Müller
 */
"use strict";

const path = require('path');
const pkgDir = require('pkg-dir');

module.exports = {
  meta: {
    docs: {
      description: "Make sure all imports are resolvable inside the project scope.",
      category: "Fill me in",
      recommended: false
    },
    fixable: null,
    schema: []
  },

  create: function(context) {
    const rootPath = pkgDir.sync(process.cwd());

    return {
      ImportDeclaration(node) {
        const importedPath = node.source.value;
        if (importedPath.indexOf('../') >= 0 || importedPath.indexOf('/') === 0) {
          const resolvedPath = path.resolve(importedPath);
          if (resolvedPath.indexOf(rootPath) !== 0) {
            context.report({
              node: node.source,
              message: 'Import outside of project scope.'
            });
          }
        }
      }
    };
  },
};
