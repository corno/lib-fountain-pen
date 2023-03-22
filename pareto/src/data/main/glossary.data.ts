import * as pd from 'pareto-core-data'

import { data, externalTypeReference, group, imp, inf, member, ref, sbuilder, sconstructor, sfunction, sInterfaceMethod, sInterfaceReference, string, type, typeReference } from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands"

import * as g_glossary from "lib-pareto-typescript-project/dist/submodules/glossary"

const d = pd.d

export const $: g_glossary.T.Glossary<pd.SourceLocation> = {
    'parameters': d({}),
    'imports': d({
        "common": imp({}),
        "fs": imp({}),
        "this": imp({}),
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
    'asynchronous': {
        'interfaces': d({}),
        'algorithms': d({}),

    },
    'synchronous': {
        'interfaces': d({
            "Block": ['group', {
                'members': d({
                    "nestedLine": sInterfaceMethod(null, ['reference', sInterfaceReference("Line")]),
                    "line": sInterfaceMethod(externalTypeReference("common", "String")),
                }),
            }],
            "Line": ['group', {
                'members': d({
                    "indent": sInterfaceMethod(null, ['reference', sInterfaceReference("Block")]),
                    "snippet": sInterfaceMethod(externalTypeReference("common", "String")),
                }),
            }],
            "Directory": ['group', {
                'members': d({
                    "allowedManual": sInterfaceMethod(externalTypeReference("common", "String")),
                    "allowedGenerated": sInterfaceMethod(externalTypeReference("common", "String")),
                    "file": sInterfaceMethod(externalTypeReference("common", "String"), ['reference', sInterfaceReference("Block")]),
                    "directory": sInterfaceMethod(externalTypeReference("common", "String"), ['reference', sInterfaceReference("Directory")]),
                }),
            }],
            //"WriteString": sInterfaceMethod(externalTypeReference("common", "String")),
            "ReportNodes": ['group', {
                'members': d({
                    "superfluousNode": sInterfaceMethod(typeReference("Node")),
                    "manualNode": sInterfaceMethod(typeReference("Node")),
                }),
            }],
            "Report": ['group', {
                'members': d({
                    "nodes": ['reference', sInterfaceReference("ReportNodes")],
                    "onWriteFileError": ['reference', sInterfaceReference("OnWriteFileError")],
                    "onReadDirError": ['reference', sInterfaceReference("OnReadDirError")],
                }),
            }],
            "OnWriteFileError": sInterfaceMethod(externalTypeReference("fs", "AnnotatedWriteFileError")),
            "OnReadDirError": sInterfaceMethod(externalTypeReference("fs", "AnnotatedReadDirError")),

            "CreateDirectory": sInterfaceMethod(externalTypeReference("common", "Path"), ['reference', sInterfaceReference("Directory")]),
            "CreateDirectoryHandler": ['group', {
                'members': d({
                    "report": ['reference', sInterfaceReference("Report")],
                    "createWriteStream": ['reference', sInterfaceReference("CreateWriteStream")],
                })
            }],
            "CreateFile": sInterfaceMethod(externalTypeReference("common", "Path"), ['reference', sInterfaceReference("Block")]),
            "CreateWriteStream": sInterfaceMethod(externalTypeReference("common", "Path"), ['reference', sInterfaceReference("common", "String")]),
            "Nothing": ['group', {
                'members': d({}),
            }]
        }),
        'algorithms': d({
            "FountainPen": sconstructor(sInterfaceReference("Block"), sInterfaceReference("common", "String")),
            "CreateDirectory": sconstructor(sInterfaceReference("CreateDirectory"), sInterfaceReference("Nothing")),
            "CreateFile": sconstructor(sInterfaceReference("CreateFile"), sInterfaceReference("Nothing")),
            "CreateDirectoryCreator": sconstructor(sInterfaceReference("CreateDirectory"), sInterfaceReference("CreateDirectoryHandler")),
            "CreateFileCreator": sconstructor(sInterfaceReference("CreateFile"), sInterfaceReference("CreateWriteStream")),
            "CreateNodeMessage": sfunction(externalTypeReference("common", "String"), data(typeReference("Node"))),
        }),
    },
}