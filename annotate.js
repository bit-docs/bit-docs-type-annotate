var typer = require("./lib/typer");
var namer = require("./lib/namer");

/**
 * @parent plugins
 * @module {Object} bit-docs-type-annotate
 * @group bit-docs-type-annotate/types types
 *
 * @description Utilities for parsing closure type annotations.
 *
 * @body
 *
 * TBD
 */
module.exports = {
    typeNameDescription: require("./lib/typeNameDescription"),
    type: function(){
        return typer.type.apply(typer, arguments);
    },
    name: function(){
        return namer.type.apply(namer, arguments);
    },
    tree: require("./lib/tree")
};
