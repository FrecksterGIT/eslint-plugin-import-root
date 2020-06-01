/**
 * @fileoverview Checks all imports are inside the project scope.
 * @author Sven Müller
 */
"use strict";

var requireIndex = require("requireindex");

module.exports.rules = requireIndex(__dirname + "/rules");
