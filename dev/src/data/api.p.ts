import * as pr from "pareto-core-raw"
import {
    externalReference as er,
    string as str,
    reference as ref,
    boolean as bln,
    number as nr,
    nested,
    externalTypeReference,
    typeReference,
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
                            'interface': ['set', {
                                'interface': "Line"
                            }]
                        }],
                        "literal": ['method', {
                            'data': externalTypeReference("common", "String"),
                            'interface': ['null', null]
                        }],
                    })
                }],
                "CreateWriteStream": ['method', {
                    'data':  externalTypeReference("common", "Path"),
                    'interface': ['set', {
                        'interface': "WriteString"
                    }]
                }],
                "CreateWriter": ['method', {
                    'data':  externalTypeReference("common", "Path"),
                    'interface': ['set', {
                        'interface': "Writer"
                    }]
                }],
                "Line": ['group', {
                    'members': d({
                        "indent": ['method', {
                            'data': null,
                            'interface': ['set', {
                                'interface': "Block"
                            }]
                        }],
                        "snippet": ['method', {
                            'data': externalTypeReference("common", "String"),
                            'interface': ['null', null]
                        }],
                    })
                }],
                "Writer": ['group', {
                    'members': d({
                        "allowed": ['method', {
                            'data': externalTypeReference("common", "String"),
                            'interface': ['null', null]
                        }],
                        "file": ['method', {
                            'data': externalTypeReference("common", "String"),
                            'interface': ['set', {
                                'interface': "Block"
                            }]
                        }],
                        "directory": ['method', {
                            'data': externalTypeReference("common", "String"),
                            'interface': ['set', {
                                'interface': "Writer"
                            }]
                        }],
                    })
                }],
                "WriteString": ['method', {
                    'data':externalTypeReference("common", "String"),
                    'interface': ['null', null]

                }],
            }),

        },
        'functions': d({
            "GetNodes": {
                'async': true,
                'data': externalTypeReference("common", "Path"),
                'return value': typeReference("Nodes"),
            },
        }),
        'callbacks': d({

            // "XXXSerializeGlossary": {
            //     'data': ['type', reference("Glossary")],
            //     'context': ['import', "fp"],
            //     'interface': "Block",
            // },
        }),
        'pipes': d({
            "FountainPen": {
                'in': {
                    'interface': "Block",
                },
                'out': {
                    'interface': "WriteString",
                }
            }
        }),
    },
    'api': {
        'imports': d({
            "tostring": "res-pareto-tostring",
        }),
        'algorithms': d({
            "createFountainPen": {
                'definition': ['pipe', {
                    'pipe': "FountainPen"
                }],
                'type': ['constructor', {
                    'configuration data': null,
                    'dependencies': d({
                    }),
                }],
            },
            "createUnboundFountainPen": {
                'definition': ['pipe', {
                    'pipe': "FountainPen"
                }],
                'type': ['constructor', {
                    'configuration data': typeReference("Configuration"),
                    'dependencies': d({
                        "joinNestedStrings": ['function', {
                            'context': ['import', "tostring"],
                            'function': "JoinNestedStrings",
                        }],
                        "getArrayAsString": ['function', {
                            'context': ['import', "tostring"],
                            'function': "GetArrayAsString",
                        }],
                    }),
                }],
            },
            "createWriterCreator": {
                'definition': ['interface', {
                    'interface': "CreateWriter"
                }],
                'type': ['constructor', {
                    'configuration data': null,
                    'dependencies': d({



                        "createWriteStream": ['interface', {
                            'interface': "CreateWriteStream",
                        }],
                        "pipeFountainPen": ['pipe', {
                            'pipe': "FountainPen",
                        }],
                        "getNodes": ['function', {
                            'function': "GetNodes",
                            'async': true,
                        }],
                        "reportSuperfluousNode": ['procedure',typeReference("SuperfluousNode")]

                    }),
                }],
            }
        })
    },
}