import * as pd from 'pareto-core-data'

import { data, externalTypeReference, group, imp, sInf, member, ref, procedure, sfunction, sInterfaceMethod, sInterfaceReference, string, type, typeReference, sInterface, sExternalInterfaceReference, boolean } from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands"

import * as g_glossary from "lib-pareto-typescript-project/dist/submodules/glossary"

const d = pd.d

export const $: g_glossary.T.Glossary<pd.SourceLocation> = {
    'imports': d({
        "common": imp(),
        "fs": imp(),
        "this": imp(),
        //"typelibrary": imp({ }),
    }),
    'glossary parameters': d({}),
    'root': {
        'namespaces': d({}),
        'types': d({
            "Configuration": type(group({
                "indentation": member(string()),
                "newline": member(string()),
            })),
            "Node": type(group({
                "path": member(ref(externalTypeReference("common", "Path"))),
                "name": member(string()),
            })),
            "WriteStreamParameters": type(group({
                "path": member(ref(externalTypeReference("common", "Path"))),
                "overwrite": member(boolean()),
            }))
        }),
    },
    'asynchronous': {
        'interfaces': d({}),
        'algorithms': d({}),

    },
    'synchronous': {
        'interfaces': d({
            "LogAndLogError": sInterface(['group', {
                'members': d({
                    "log": ['reference', sExternalInterfaceReference("common", "String")],
                    "logError": ['reference', sExternalInterfaceReference("common", "String")],
                }),
            }]),
            "LogError": sInterface(['group', {
                'members': d({
                    "logError": ['reference', sExternalInterfaceReference("common", "String")],
                }),
            }]),
            "Block": sInterface(['group', {
                'members': d({
                    "nestedLine": sInterfaceMethod(null, ['reference', sInterfaceReference("Line")]),
                    "line": sInterfaceMethod(externalTypeReference("common", "String")),
                }),
            }]),
            "Line": sInterface(['group', {
                'members': d({
                    "indent": sInterfaceMethod(null, ['reference', sInterfaceReference("Block")]),
                    "snippet": sInterfaceMethod(externalTypeReference("common", "String")),
                }),
            }]),
            "Directory": sInterface(['group', {
                'members': d({
                    "allowedManual": sInterfaceMethod(externalTypeReference("common", "String")),
                    "allowedGenerated": sInterfaceMethod(externalTypeReference("common", "String")),
                    "file": sInterfaceMethod(externalTypeReference("common", "String"), ['reference', sInterfaceReference("Block")]),
                    "template": sInterfaceMethod(externalTypeReference("common", "String"), ['reference', sInterfaceReference("Block")]),
                    "directory": sInterfaceMethod(externalTypeReference("common", "String"), ['reference', sInterfaceReference("Directory")]),
                }),
            }]),
            //"WriteString": sInterfaceMethod(externalTypeReference("common", "String")),
            "ReportNodes": sInterface(['group', {
                'members': d({
                    "superfluousNode": sInterfaceMethod(typeReference("Node")),
                    "manualNode": sInterfaceMethod(typeReference("Node")),
                }),
            }]),
            // "Report": sInterface(['group', {
            //     'members': d({
            //         "nodes": ['reference', sInterfaceReference("ReportNodes")],
            //         "onWriteFileError": ['reference', sInterfaceReference("OnWriteFileError")],
            //         "onReadDirError": ['reference', sInterfaceReference("OnReadDirError")],
            //     }),
            // }]),
            "OnWriteFileError": sInterface(sInterfaceMethod(externalTypeReference("fs", "AnnotatedWriteFileError"))),
            "OnReadDirError": sInterface(sInterfaceMethod(externalTypeReference("fs", "AnnotatedReadDirError"))),

            "CreateDirectory": sInterface(sInterfaceMethod(externalTypeReference("common", "Path"), ['reference', sInterfaceReference("Directory")])),
            "CreateDirectoryHandler": sInterface(['group', {
                'members': d({
                    "report": ['reference', sInterfaceReference("ReportNodes")],
                    "createWriteStream": ['reference', sInterfaceReference("CreateWriteStream")],
                })
            }]),
            "CreateFile": sInterface(sInterfaceMethod(externalTypeReference("common", "Path"), ['reference', sInterfaceReference("Block")])),
            "CreateWriteStream": sInterface(sInterfaceMethod(typeReference("WriteStreamParameters"), ['reference', sExternalInterfaceReference("common", "String")])),
        }),
        'algorithms': d({
            "CreateDirectory": procedure(sInf(sInterfaceReference("CreateDirectory")), sInterfaceReference("LogAndLogError")),
            "CreateFile": procedure(sInf(sInterfaceReference("CreateFile")), sInterfaceReference("LogError")),

            "FountainPen": procedure(sInf(sInterfaceReference("Block")), sExternalInterfaceReference("common", "String")),
            "CreateDirectoryCreator": procedure(sInf(sInterfaceReference("CreateDirectory")), sInterfaceReference("CreateDirectoryHandler")),
            "CreateFileCreator": procedure(sInf(sInterfaceReference("CreateFile")), sInterfaceReference("CreateWriteStream")),
            "CreateNodeMessage": sfunction(externalTypeReference("common", "String"), data(typeReference("Node"))),
        }),
    },
}