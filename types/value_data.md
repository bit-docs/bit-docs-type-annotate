@parent bit-docs-type-annotate/types
@typedef {{}} bit-docs-type-annotate/types/valueData valueData

Data related to a value in a [bit-docs-type-annotate/types/typeExpression type expression].

@option {Array<bit-docs-type-annotate/types/typeData>} types The allowed
types of the value. Multiple types can be specified like:

    {Boolean|Array}

@option {String} [name] Set if the value is given a name. This property is
set by record type expressions like:

    {{PROPERTY_NAME: TYPE, PROPERTY_NAME: TYPE}}

Or by [bit-docs-type-annotate/types/nameExpression name expressions] like:

    method(arg1, arg2)

@option {String} [description] A description associated with the value. This
is commonly provided by the [bit-docs-js/tags/option @option] or
[bit-docs-js/tags/param @param] tag.

@option {Boolean} [optional] If the type does not need to exist. This can be
specified in the type like:

    {String=}

Or more commonly in a
[bit-docs-type-annotate/types/nameExpression name expression] like:

    [NAME]

@option {Boolean} [nullable] If the type can be null. It is specified with
`?` like:

    {?TYPE}
    
@option {Boolean} [nonnull] If the type can not be null. It is specified with
`!` like:

    {!TYPE}

@option {Boolean} [variable] If multiple values of the type can be provided.
This can be specified in the type with `...` like:

    {function(...Number)}

or:

    {function(Number...)}


@option {bit-docs-type-annotate/types/typeData} [defaultValue] The default
value of the object if it is not provided. This is commonly specified by a
[bit-docs-type-annotate/types/nameExpression name expression] like:

    [foo="bar"]
