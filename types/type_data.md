@parent bit-docs-type-annotate/types
@typedef {{}} bit-docs-type-annotate/types/typeData typeData

Data related to a specific type value. These objects are created by
[bit-docs-type-annotate/types/typeExpression type expressions].

@option {String} type The type name this dataType represents.

@option {Array<bit-docs-type-annotate/types/valueData>} [template] An array
of valueData representing each specified type argument within `<>`. They are
specified like:

    {PRIMARY_TYPE.<TYPE,TYPE>}

@option {Array<bit-docs-type-annotate/types/valueData>} [options] An array of
valueData representing each property name and value type in a record type.
They are specified like:

    {{PROPERTY_NAME: TYPE, PROPERTY_NAME: TYPE}}

The PROPERTY_NAME value sets the `name` property on the individual
[bit-docs-type-annotate/types/valueData valueDatas].

@option {bit-docs-type-annotate/types/valueData} [context] Represents the
valueData a function expression can have as `this`. It is specified like:

    {function(this:TYPE)}

@option {bit-docs-type-annotate/types/valueData} [constructs] Represents the
valueData a function expression will create when called with the `new`
keyword. It is specified like:

    {function(new:TYPE)}

@option {Array<bit-docs-type-annotate/types/valueData>} [params] Represents
the arguments a function can be called with. They are specified like:

    {function(TYPE,TYPE)}

@option {bit-docs-type-annotate/types/valueData} [constructs] Represents the
return value of a function expression. It is specified like:

    {function():TYPE}
    
@body
