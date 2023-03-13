import * as pd from 'pareto-core-data'

import {
    null_,
    array,
    string,
    reference,
    boolean,
    typeReference,
    dictionary, group, member, taggedUnion, types, sfunc, sdata, builderReference, inf, builderMethod, type, context, glossaryParameter, parametrizedTypeReference, parametrizedReference
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands"

import * as g_glossary from "lib-pareto-typescript-project/dist/submodules/glossary"

const d = pd.d

export const $: g_glossary.T.Glossary<pd.SourceLocation> = {
    'parameters': d({}),
    'types': d({
        "Configuration": type(group({
            "indentation": member(string()),
            "newline": member(string()),
        })),
        "Node": type(group({
            "path": member(reference("common", "Path")),
            "name": member(string()),
        })),
    }),
    'type': ['synchronous', {
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
                    "allowedManual": builderMethod(typeReference("common", "String")),
                    "allowedGenerated": builderMethod(typeReference("common", "String")),
                    "file": builderMethod(typeReference("common", "String"), ['reference', builderReference("Block")]),
                    "directory": builderMethod(typeReference("common", "String"), ['reference', builderReference("Directory")]),
                }),
            }],
            "WriteString": builderMethod(typeReference("common", "String")),
            "ReportNodes": ['group', {
                'members': d({
                    "superfluousNode": builderMethod(typeReference("Node")),
                    "manualNode": builderMethod(typeReference("Node")),
                }),
            }],
            "Report": ['group', {
                'members': d({
                    "nodes": ['reference', builderReference("ReportNodes")],
                    "writeFileError": ['reference', builderReference("OnWriteFileError")],
                    "readDirError": ['reference', builderReference("OnReadDirError")],
                }),
            }],
            "OnWriteFileError": builderMethod(typeReference("fs", "AnnotatedWriteFileError")),
            "OnReadDirError": builderMethod(typeReference("fs", "AnnotatedReadDirError")),
        }),
        'functions': d({
            "FountainPen": sfunc(typeReference("common", "Null"), builderReference("Block"), builderReference("WriteString"), null),
            "CreateNodeMessage": sfunc(typeReference("Node"), null, null, sdata(typeReference("common", "String"))),
            "CreateDirectory": sfunc(typeReference("common", "Path"), builderReference("Directory"), builderReference("Report"), null),
            "CreateFile": sfunc(typeReference("common", "Path"), builderReference("Block"), builderReference("OnWriteFileError"), null),
            "UnboundCreateDirectory": sfunc(typeReference("common", "Path"), builderReference("Directory"), builderReference("ReportNodes"), null),
            "UnboundCreateFile": sfunc(typeReference("common", "Path"), builderReference("Block"), null, null),
            "CreateWriteStream": sfunc(typeReference("common", "Path"), builderReference("WriteString"), null, null),
        }),

    }],
}