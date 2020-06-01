/**
 * @fileoverview Checks imports for absolute paths.
 * @author Sven Müller
 */
"use strict";

module.exports = {
  meta: {
    docs: {
      description: "Checks imports for absolute paths.",
      category: "Fill me in",
      recommended: false
    },
    fixable: null,
    schema: []
  },

  create: function(context) {
    return {
      ImportDeclaration(node) {
        const importedPath = node.source.value;
        if (importedPath.indexOf('/') === 0) {
          context.report({
            node: node.source,
            message: 'Absolute import path not allowed.'
          });
        }
      }
    };
  },
};
