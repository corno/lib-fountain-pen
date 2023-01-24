import * as pr from 'pareto-core-raw'
import {
    externalReference as er,
    string as str,
    reference as ref,
    boolean as bln,
    number as nr,
    nested,
    typeReference,
    managedPipe,
    interfaceReference,
    callback,
    procedure,
    externalNamespacedTypeReference,
    method,
} from "lib-pareto-typescript-project/dist/modules/glossary/api/shorthands.p"
import { dictionary, group, member, taggedUnion, types, _function } from "lib-pareto-typescript-project/dist/modules/glossary/api/shorthands.p"

import * as mmoduleDefinition from "lib-pareto-typescript-project/dist/modules/moduleDefinition"
import * as mglossary from "lib-pareto-typescript-project/dist/modules/glossary"
import { constructor, definitionReference, externalDefinitionReference } from "lib-pareto-typescript-project/dist/modules/moduleDefinition/api/shorthands.p"


const d = pr.wrapRawDictionary
const a = pr.wrapRawArray

export const $: mmoduleDefinition.TModuleDefinition = {
    'glossary': {
        'imports': d({
            "common": "glo-pareto-common"
        }),
        'parameters': d({}),
        'namespace': {
            'types': types({
                "Configuration": group({
                    "indentation": member(str()),
                    "newline": member(str()),
                }),
                "Nodes": dictionary(str()),
                "SuperfluousNode": group({
                    "path": member(er("common", "Path")),
                    "name": member(str()),
                }),
            }),
            'interfaces': d({
                "Block": ['group', {
                    'members': d({
                        "line": method(null, ['reference', {
                            'context': ['local', null],
                            'namespaces': a([]),
                            'interface': "Line"
                        }], true),
                        "literal": method(externalNamespacedTypeReference("common", "String")),
                    })
                }],
                "Line": ['group', {
                    'members': d({
                        "indent": method(null, ['reference', {
                            'context': ['local', null],
                            'namespaces': a([]),
                            'interface': "Block"
                        }], true),
                        "snippet": method(externalNamespacedTypeReference("common", "String")),
                    })
                }],
                "Writer": ['group', {
                    'members': d({
                        "allowed": method(externalNamespacedTypeReference("common", "String")),
                        "file": method(externalNamespacedTypeReference("common", "String"), ['reference', {
                            'context': ['local', null],
                            'namespaces': a([]),
                            'interface': "Block"
                        }], true),
                        "directory": method(externalNamespacedTypeReference("common", "String"), ['reference', {
                            'context': ['local', null],
                            'namespaces': a([]),
                            'interface': "Writer"
                        }], true),
                    })
                }],
                "WriteString":method(externalNamespacedTypeReference("common", "String")),
            }),

        },
        'functions': d({
            "FountainPen": managedPipe(externalNamespacedTypeReference("common", "Null"), interfaceReference("Block"), interfaceReference("WriteString")),
            "GetNodes": _function(externalNamespacedTypeReference("common", "Path"), typeReference("Nodes"), true),
            "CreateSuperfluousNodeMessage": _function(typeReference("SuperfluousNode"), externalNamespacedTypeReference("common", "String")),
            "CreateWriter": {
                'return type': ['nothing', null],
                'managed input interface': interfaceReference("Writer"),
                'output interface': null,

                'data': externalNamespacedTypeReference("common", "Path"),
            },
            "CreateWriteStream": {
                'return type': ['nothing', null],
                'managed input interface': interfaceReference("WriteString"),
                'output interface': null,

                'data': externalNamespacedTypeReference("common", "Path"),
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
            "fountainPen": {
                'definition': definitionReference("FountainPen"),
                'type': ['reference', null],
            },
            "createUnboundFountainPen": {
                'definition': definitionReference("FountainPen"),
                'type': constructor(typeReference("Configuration"), {
                    "joinNestedStrings": externalDefinitionReference("tostring", "JoinNestedStrings"),
                    "getArrayAsString": externalDefinitionReference("tostring", "GetArrayAsString"),
                }),
            },
            "createWriter": {
                'definition': definitionReference("CreateWriter"),
                'type': constructor(null, {
                    "onError": externalDefinitionReference("common", "Log"),
                    "reportSuperfluousNode": definitionReference("ReportSuperfluousNode"),
                }),
            },
            "createUnboundWriterCreator": {
                'definition': definitionReference("CreateWriter"),
                'type': constructor(null, {
                    "createWriteStream": definitionReference("CreateWriteStream"),
                    "pipeFountainPen": definitionReference("FountainPen"),
                    "getNodes": definitionReference("GetNodes"),
                    "reportSuperfluousNode": definitionReference("ReportSuperfluousNode"),
                }),
            },
            "createSuperfluousNodeMessage": {
                'definition': definitionReference("CreateSuperfluousNodeMessage"),
                'type': ['reference', null],
            }
        })
    },
}