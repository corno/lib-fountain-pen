import * as pr from 'pareto-core-raw'
import {
    externalReference as er,
    string as str,
    reference as ref,
    boolean as bln,
    number as nr,
    nested,
    externalTypeReference,
    typeReference,
    managedPipe,
    interfaceReference,
    callback,
    procedure,
} from "lib-pareto-typescript-project/dist/modules/glossary/api/shorthands.p"
import { dictionary, group, member, taggedUnion, types, _function } from "lib-pareto-typescript-project/dist/modules/glossary/api/shorthands.p"


import { string, reference, externalReference, number, boolean } from "lib-pareto-typescript-project/dist/modules/moduleDefinition/api/shorthands.p"
import * as mmoduleDefinition from "lib-pareto-typescript-project/dist/modules/moduleDefinition"

const d = pr.wrapRawDictionary


export const $: mmoduleDefinition.TModuleDefinition = {
    'glossary': {
        'imports': d({
            "common": "glo-pareto-common"
        }),
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
                        "line": ['method', {
                            'data': null,
                            'interface': ['reference', {
                                'interface': "Line"
                            }],
                        }],
                        "literal": ['method', {
                            'data': externalTypeReference("common", "String"),
                            'interface': null,
                        }],
                    })
                }],
                "Line": ['group', {
                    'members': d({
                        "indent": ['method', {
                            'data': null,
                            'interface': ['reference', {
                                'interface': "Block"
                            }],
                        }],
                        "snippet": ['method', {
                            'data': externalTypeReference("common", "String"),
                            'interface': null,
                        }],
                    })
                }],
                "Writer": ['group', {
                    'members': d({
                        "allowed": ['method', {
                            'data': externalTypeReference("common", "String"),
                            'interface': null,
                        }],
                        "file": ['method', {
                            'data': externalTypeReference("common", "String"),
                            'interface': ['reference', {
                                'interface': "Block"
                            }],
                        }],
                        "directory": ['method', {
                            'data': externalTypeReference("common", "String"),
                            'interface': ['reference', {
                                'interface': "Writer"
                            }],
                        }],
                    })
                }],
                "WriteString": ['method', {
                    'data': externalTypeReference("common", "String"),
                    'interface': null
                }],
            }),

        },
        'functions': d({
            "FountainPen": managedPipe(externalTypeReference("common", "Null"), interfaceReference("Block"), interfaceReference("WriteString")),
            "GetNodes": _function(externalTypeReference("common", "Path"), typeReference("Nodes"), true),
            "CreateSuperfluousNodeMessage": _function(typeReference("SuperfluousNode"), externalTypeReference("common", "String")),

            "CreateWriter":{
                'return type': ['nothing', null],
                'managed input interface': interfaceReference("Writer"),
                'output interface': null,

                'data': externalTypeReference("common", "Path"),
            },
            "CreateWriteStream": {
                'return type': ['nothing', null],
                'managed input interface': interfaceReference("WriteString"),
                'output interface': null,

                'data': externalTypeReference("common", "Path"),
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
                'definition': {
                    'function': "FountainPen"
                },
                'type': ['reference', null],
            },
            "createUnboundFountainPen": {
                'definition': {
                    'function': "FountainPen"
                },
                'type': ['constructor', {
                    'configuration data': typeReference("Configuration"),
                    'dependencies': d({
                        "joinNestedStrings": {
                            'context': ['import', "tostring"],
                            'function': "JoinNestedStrings",
                        },
                        "getArrayAsString": {
                            'context': ['import', "tostring"],
                            'function': "GetArrayAsString",
                        },
                    }),
                }],
            },
            "createWriter": {
                'definition': {
                    'function': "CreateWriter"
                },
                'type': ['constructor', {
                    'configuration data': null,
                    'dependencies': d({
                        "onError": {
                            'context': ['import', "common"],
                            'function': "Log",
                        },
                        // "writeString": ['interface', {
                        //     'interface': "WriteString",
                        // }],
                        "reportSuperfluousNode": {
                            'function': "ReportSuperfluousNode"
                        }

                    }),
                }],
            },
            "createUnboundWriterCreator": {
                'definition': {
                    'function': "CreateWriter"
                },
                'type': ['constructor', {
                    'configuration data': null,
                    'dependencies': d({
                        "createWriteStream":  {
                            'function': "CreateWriteStream",
                        },
                        "pipeFountainPen":  {
                            'function': "FountainPen",
                        },
                        "getNodes":  {
                            'function': "GetNodes",
                        },
                        "reportSuperfluousNode": {
                            'function': "ReportSuperfluousNode"
                        }

                    }),
                }],
            },
            "createSuperfluousNodeMessage": {
                'definition': {
                    'function': "CreateSuperfluousNodeMessage"
                },
                'type': ['reference', null],
            }
        })
    },
}