import * as pd from 'pareto-core-data'

import {
    null_,
    array,
    string,
    boolean,
    typeReference,
    dictionary, group, member, taggedUnion, sfunc, sdata, builderReference, inf, builderMethod, type, imp, ref, externalTypeReference
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands"

import * as g_glossary from "lib-pareto-typescript-project/dist/submodules/glossary"

const d = pd.d

export const $: g_glossary.T.Glossary<pd.SourceLocation> = {
    'parameters': d({}),
    'imports': d({
        "common": imp({}),
        "fs": imp({}),
    }),
    'types': d({
        "Configuration": type(group({
            "indentation": member(string()),
            "newline": member(string()),
        })),
        "Node": type(group({
            "path": member(ref(externalTypeReference("common", "Path"))),
            "name": member(string()),
        })),
    }),
    'type': ['synchronous', {
        'builders': d({
            "Block": ['group', {
                'members': d({
                    "nestedLine": builderMethod(null, ['reference', builderReference("Line")]),
                    "line": builderMethod(externalTypeReference("common", "String")),
                }),
            }],
            "Line": ['group', {
                'members': d({
                    "indent": builderMethod(null, ['reference', builderReference("Block")]),
                    "snippet": builderMethod(externalTypeReference("common", "String")),
                }),
            }],
            "Directory": ['group', {
                'members': d({
                    "allowedManual": builderMethod(externalTypeReference("common", "String")),
                    "allowedGenerated": builderMethod(externalTypeReference("common", "String")),
                    "file": builderMethod(externalTypeReference("common", "String"), ['reference', builderReference("Block")]),
                    "directory": builderMethod(externalTypeReference("common", "String"), ['reference', builderReference("Directory")]),
                }),
            }],
            "WriteString": builderMethod(externalTypeReference("common", "String")),
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
            "OnWriteFileError": builderMethod(externalTypeReference("fs", "AnnotatedWriteFileError")),
            "OnReadDirError": builderMethod(externalTypeReference("fs", "AnnotatedReadDirError")),
        }),
        'functions': d({
            "FountainPen": sfunc(externalTypeReference("common", "Null"), builderReference("Block"), builderReference("WriteString"), null),
            "CreateNodeMessage": sfunc(typeReference("Node"), null, null, sdata(externalTypeReference("common", "String"))),
            "CreateDirectory": sfunc(externalTypeReference("common", "Path"), builderReference("Directory"), builderReference("Report"), null),
            "CreateFile": sfunc(externalTypeReference("common", "Path"), builderReference("Block"), builderReference("OnWriteFileError"), null),
            "UnboundCreateDirectory": sfunc(externalTypeReference("common", "Path"), builderReference("Directory"), builderReference("ReportNodes"), null),
            "UnboundCreateFile": sfunc(externalTypeReference("common", "Path"), builderReference("Block"), null, null),
            "CreateWriteStream": sfunc(externalTypeReference("common", "Path"), builderReference("WriteString"), null, null),
        }),

    }],
}