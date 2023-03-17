import * as pd from 'pareto-core-data'

import {
    null_,
    array,
    string,
    boolean,
    typeReference,
    dictionary, group, member, taggedUnion, sfunc, data, builderReference, inf, builderMethod, type, imp, ref, externalTypeReference, bldr
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
                    "onWriteFileError": ['reference', builderReference("OnWriteFileError")],
                    "onReadDirError": ['reference', builderReference("OnReadDirError")],
                }),
            }],
            "OnWriteFileError": builderMethod(externalTypeReference("fs", "AnnotatedWriteFileError")),
            "OnReadDirError": builderMethod(externalTypeReference("fs", "AnnotatedReadDirError")),

            "CreateDirectory": builderMethod(externalTypeReference("common", "Path"), ['reference', builderReference("Directory")]),
            "CreateFile": builderMethod(externalTypeReference("common", "Path"), ['reference', builderReference("Block")]),
            "CreateWriteStream": builderMethod(externalTypeReference("common", "Path"), ['reference', builderReference("WriteString")]),

        }),
        'functions': d({
            "FountainPen": sfunc(bldr(builderReference("Block")), bldr(builderReference("WriteString"))),
            "CreateNodeMessage": sfunc(data(typeReference("Node")), data(externalTypeReference("common", "String"))),
        }),

    }],
}