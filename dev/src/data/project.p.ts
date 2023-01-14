import * as pr from "pareto-core-raw"
import {
    externalReference as er,
    string as str,
    nullType,
    type,
    reference as ref,
    boolean as bln,
    array,
} from "lib-pareto-typescript-project/dist/modules/glossary/api/shorthands.p"
import { dictionary, group, member, taggedUnion, types, _function } from "lib-pareto-typescript-project/dist/modules/glossary/api/shorthands.p"


import { string, reference, externalReference, number, boolean } from "lib-pareto-typescript-project/dist/modules/api/api/shorthands.p"
import * as NProject from "lib-pareto-typescript-project/dist/modules/project"
import * as mapi from "lib-pareto-typescript-project/dist/modules/api"
const wd = pr.wrapRawDictionary

function def($: mapi.TModuleDefinition): mapi.TModuleDefinition {
    return $
}


export const project: NProject.TProject = {
    'modules': wd({
        "main": {
            'definition': {
                "glossary": {
                    'imports': wd({
                        "common": "glo-pareto-common"
                    }),
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
                    'functions': wd({
                        "GetNodes": {
                            'async': true,
                            'data': externalReference("common", "Path"),
                            'return value': reference("Nodes"),
                        },
                    }),
                    'interfaces': wd({
                        "Block": ['group', {
                            'members': wd({
                                "line": ['method', {
                                    'data': ['null', null],
                                    'interface': ['set', {
                                        'interface': "Line"
                                    }]
                                }],
                                "literal": ['method', {
                                    'data': ['type', string()],
                                    'interface': ['null', null]
                                }],
                            })
                        }],
                        "CreateWriteStream": ['method', {
                            'data': ['type', externalReference("common", "Path")],
                            'interface': ['set', {
                                'interface': "WriteString"
                            }]
                        }],
                        "CreateWriter": ['method', {
                            'data': ['type', externalReference("common", "Path")],
                            'interface': ['set', {
                                'interface': "Writer"
                            }]
                        }],
                        "Line": ['group', {
                            'members': wd({
                                "indent": ['method', {
                                    'data': ['null', null],
                                    'interface': ['set', {
                                        'interface': "Block"
                                    }]
                                }],
                                "snippet": ['method', {
                                    'data': ['type', string()],
                                    'interface': ['null', null]
                                }],
                            })
                        }],
                        "Writer": ['group', {
                            'members': wd({
                                "allowed": ['method', {
                                    'data': ['type', string()],
                                    'interface': ['null', null]
                                }],
                                "file": ['method', {
                                    'data': ['type', string()],
                                    'interface': ['set', {
                                        'interface': "Block"
                                    }]
                                }],
                                "directory": ['method', {
                                    'data': ['type', string()],
                                    'interface': ['set', {
                                        'interface': "Writer"
                                    }]
                                }],
                            })
                        }],
                        "WriteString": ['method', {
                            'data': ['type', string()],
                            'interface': ['null', null]

                        }],
                    }),
                    'callbacks': wd({

                        // "XXXSerializeGlossary": {
                        //     'data': ['type', reference("Glossary")],
                        //     'context': ['import', "fp"],
                        //     'interface': "Block",
                        // },
                    }),
                    'pipes': wd({
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
                "api": {
                    'imports': wd({
                        "tostring": "res-pareto-tostring",
                    }),
                    'algorithms': wd({
                        "createFountainPen": {
                            'definition': ['pipe', {
                                'pipe': "FountainPen"
                            }],
                            'type': ['constructor', {
                                'configuration data': ['null', null],
                                'dependencies': wd({
                                }),
                            }],
                        },
                        "createUnboundFountainPen": {
                            'definition': ['pipe', {
                                'pipe': "FountainPen"
                            }],
                            'type': ['constructor', {
                                'configuration data': ['type', reference("Configuration")],
                                'dependencies': wd({
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
                                'configuration data': ['null', null],
                                'dependencies': wd({



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
                                    "reportSuperfluousNode": ['procedure', ['type', reference("SuperfluousNode")]]

                                }),
                            }],
                        }
                    })
                },
            },
            'implementation': {}

        },
    }),
    'main': "main"
}