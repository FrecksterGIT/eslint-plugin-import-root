/**
 * @fileoverview Make sure all imports are resolvable inside the project scope.
 * @author Sven Müller
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/no-external"),

  RuleTester = require("eslint").RuleTester;

RuleTester.setDefaultConfig({
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module"
  }
});

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("no-external", rule, {

  valid: [
    {
      code: "import './';"
    }
  ],

  invalid: [
    {
      code: "import '../';",
      errors: [{
        message: "Import outside of project scope.",
        type: "Literal"
      }]
    },
    {
      code: "import '/';",
      errors: [{
        message: "Import outside of project scope.",
        type: "Literal"
      }]
    }
  ]
});
