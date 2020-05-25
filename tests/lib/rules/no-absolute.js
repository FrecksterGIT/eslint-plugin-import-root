/**
 * @fileoverview Checks imports for absolute paths.
 * @author Sven Müller
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/no-absolute"),

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
ruleTester.run("no-absolute", rule, {

    valid: [
        {
            code: 'import "test";'
        },
        {
            code: 'import "./test"'
        }
    ],

    invalid: [
        {
            code: "import '/';",
            errors: [{
                message: "Absolute import path not allowed.",
                type: "Literal"
            }]
        }
    ]
});
