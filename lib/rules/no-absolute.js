/**
 * @fileoverview Checks imports for absolute paths.
 * @author Sven Müller
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
      description: "Checks imports for absolute paths.",
      category: "Fill me in",
      recommended: false
    },
    fixable: null,  // or "code" or "whitespace"
    schema: [
      // fill in your schema
    ]
  },

  create: function(context) {

    // variables should be defined here

    //----------------------------------------------------------------------
    // Helpers
    //----------------------------------------------------------------------

    // any helper functions should go here or else delete this section

    //----------------------------------------------------------------------
    // Public
    //----------------------------------------------------------------------

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
  }
};
