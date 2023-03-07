import * as pd from 'pareto-core-data'

import {
    null_,
    array,
    string,
    reference,
    boolean,
    typeReference,
    dictionary, group, member, taggedUnion, types, func, data, builderReference, inf, builderMethod, type, context, glossaryParameter, parametrizedTypeReference, parametrizedReference
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands"

import * as gglossary from "lib-pareto-typescript-project/dist/submodules/glossary"

const d = pd.d

export const $: gglossary.T.Glossary<pd.SourceLocation> = {
    'parameters': d({}),
    'types': d({
        "Configuration": type(group({
            "indentation": member(string()),
            "newline": member(string()),
        })),
        "Nodes": type(dictionary(string())),
        "Node": type(group({
            "path": member(reference("common", "Path")),
            "name": member(string()),
        })),
    }),
    'builders': d({
        "Block": ['group', {
            'members': d({
                "nestedLine": builderMethod(null, ['reference', builderReference("Line")]),
                "line": builderMethod(typeReference("common", "String")),
            }),
        }],
        "Line": ['group', {
            'members': d({
                "indent": builderMethod(null, ['reference', builderReference("Block")]),
                "snippet": builderMethod(typeReference("common", "String")),
            }),
        }],
        "Directory": ['group', {
            'members': d({
                "allowed": builderMethod(typeReference("common", "String")),
                "file": builderMethod(typeReference("common", "String"), ['reference', builderReference("Block")]),
                "directory": builderMethod(typeReference("common", "String"), ['reference', builderReference("Directory")]),
            }),
        }],
        "WriteString": builderMethod(typeReference("common", "String")),
        "Report": ['group', {
            'members': d({
                "superfluousNode": builderMethod(typeReference("Node")),
                "manualNode": builderMethod(typeReference("Node")),
            }),
        }]
    }),
    'interfaces': d({}),
    'functions': d({
        "FountainPen": func(typeReference("common", "Null"), builderReference("Block"), builderReference("WriteString"), null),
        "GetNodes": func(typeReference("common", "Path"), null, null, data(typeReference("Nodes"), true)),
        "CreateNodeMessage": func(typeReference("Node"), null, null, data(typeReference("common", "String"), false)),
        "CreateDirectory": func(typeReference("common", "Path"), builderReference("Directory"), builderReference("Report"), null),
        "CreateFile": func(typeReference("common", "Path"), builderReference("Block"), null, null),
        "CreateWriteStream": func(typeReference("common", "Path"), builderReference("WriteString"), null, null),
    }),
}