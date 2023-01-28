import * as pr from 'pareto-core-raw'
import {
    reference,
    string,
    typeReference,
    managedPipe,
    interfaceReference,
    callback,
    procedure,
    method, dictionary, group, member, taggedUnion, types, _function
} from "lib-pareto-typescript-project/dist/modules/glossary/api/shorthands.p"

import { algorithm, constructor, definitionReference, } from "lib-pareto-typescript-project/dist/modules/moduleDefinition/api/shorthands.p"

import * as mmoduleDefinition from "lib-pareto-typescript-project/dist/modules/moduleDefinition"

const d = pr.wrapRawDictionary

export const $: mmoduleDefinition.TModuleDefinition = {
    'glossary': {
        'imports': d({
            "common": "glo-pareto-common"
        }),
        'parameters': d({}),
        'templates': d({}),
        'types': types({
            "Configuration": group({
                "indentation": member(string()),
                "newline": member(string()),
            }),
            "Nodes": dictionary(string()),
            "SuperfluousNode": group({
                "path": member(reference("common", "Path")),
                "name": member(string()),
            }),
        }),
        'interfaces': d({
            "Block": ['group', {
                'members': d({
                    "nestedLine": method(null, ['reference', {
                        'context': ['local', {}],
                        'interface': "Line"
                    }], true),
                    "line": method(typeReference("common", "String")),
                })
            }],
            "Line": ['group', {
                'members': d({
                    "indent": method(null, ['reference', {
                        'context': ['local', {}],
                        'interface': "Block"
                    }], true),
                    "snippet": method(typeReference("common", "String")),
                })
            }],
            "Writer": ['group', {
                'members': d({
                    "allowed": method(typeReference("common", "String")),
                    "file": method(typeReference("common", "String"), ['reference', {
                        'context': ['local', {}],
                        'interface': "Block"
                    }], true),
                    "directory": method(typeReference("common", "String"), ['reference', {
                        'context': ['local', {}],
                        'interface': "Writer"
                    }], true),
                })
            }],
            "WriteString": method(typeReference("common", "String")),
        }),
        'functions': d({
            "FountainPen": managedPipe(typeReference("common", "Null"), interfaceReference("Block"), interfaceReference("WriteString")),
            "GetNodes": _function(typeReference("common", "Path"), typeReference("Nodes"), true),
            "CreateSuperfluousNodeMessage": _function(typeReference("SuperfluousNode"), typeReference("common", "String")),
            "CreateWriter": {
                'return type': ['nothing', {}],
                'managed input interface': ['set', interfaceReference("Writer")],
                'output interface': ['not set', {}],

                'data': typeReference("common", "Path"),
            },
            "CreateWriteStream": {
                'return type': ['nothing', {}],
                'managed input interface': ['set', interfaceReference("WriteString")],
                'output interface': ['not set', {}],
                'data': typeReference("common", "Path"),
            },
            "ReportSuperfluousNode": procedure(typeReference("SuperfluousNode")),
        }),
    },
    'api': {
        'imports': d({
            "tostring": "res-pareto-tostring",
            "common": "glo-pareto-common",
        }),
        'algorithms': d({
            "fountainPen": algorithm(definitionReference("FountainPen")),
            "createUnboundFountainPen": algorithm(definitionReference("FountainPen"), constructor(typeReference("Configuration"), {
                "joinNestedStrings": definitionReference("tostring", "JoinNestedStrings"),
                "getArrayAsString": definitionReference("tostring", "GetArrayAsString"),
            })),
            "createWriter": algorithm(definitionReference("CreateWriter"), constructor(null, {
                "onError": definitionReference("common", "Log"),
                "reportSuperfluousNode": definitionReference("ReportSuperfluousNode"),
            })),
            "createUnboundWriterCreator": algorithm(definitionReference("CreateWriter"), constructor(null, {
                "createWriteStream": definitionReference("CreateWriteStream"),
                "pipeFountainPen": definitionReference("FountainPen"),
                "getNodes": definitionReference("GetNodes"),
                "reportSuperfluousNode": definitionReference("ReportSuperfluousNode"),
            })),
            "createSuperfluousNodeMessage": algorithm(definitionReference("CreateSuperfluousNodeMessage")),
        })
    },
}