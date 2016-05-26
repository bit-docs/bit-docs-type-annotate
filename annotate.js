var typer = require("./lib/typer");
var namer = require("./lib/namer");

module.exports = {
    typeNameDescription: require("./lib/typeNameDescription"),
    type: function(){
        return typer.type.apply(typer, arguments);
    },
    name: function(){
        return namer.type.apply(namer, arguments);
    },
    tree: require("./lib/tree");
};
