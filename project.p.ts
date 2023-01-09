import * as pr from "pareto-core-raw"
import {
    externalReference as er,
    string as str,
    reference as ref,
    boolean as bln,
    number as nr,
} from "lib-pareto-typescript-project/dist/modules/glossary/api/shorthands.p"
import { dictionary, group, member, taggedUnion, types, _function } from "lib-pareto-typescript-project/dist/modules/glossary/api/shorthands.p"


import { string, reference, externalReference, number, boolean } from "lib-pareto-typescript-project/dist/modules/api/api/shorthands.p"
import * as NProject from "lib-pareto-typescript-project/dist/modules/project"
const wd = pr.wrapRawDictionary
export const project: NProject.TProject = {
    'modules': wd({
        "main": {
            'definition': {
                'glossary': {
                    'imports': wd({
                    }),
                    'types': types({
                        // "BooleanRange": ['nested', bln()],
                        // "NumberPair": group({
                        //     "this": member(nr()),
                        //     "that": member(nr()),
                        // }),
                    }),
                    'functions': wd({
                        // "And": {
                        //     "data": reference("BooleanRange"),
                        //     "return value": boolean()
                        // },
                        // "Or": {
                        //     "data": reference("BooleanRange"),
                        //     "return value": boolean()
                        // },
                        // "GreaterThan": {
                        //     "data": reference("NumberPair"),
                        //     "return value": boolean()
                        // },
                        // "SmallerThan": {
                        //     "data": reference("NumberPair"),
                        //     "return value": boolean()
                        // },
                        // "Not": {
                        //     "data": boolean(),
                        //     "return value": boolean()
                        // },
                        // "IsZero": {
                        //     "data": number(),
                        //     "return value": boolean()
                        // },
                        // "Equal": {
                        //     "data": reference("NumberPair"),
                        //     "return value": boolean()
                        // },
                    }),
                    'callbacks': wd({
                    }),
                    'interfaces': wd({}),
                },
                'api': {
                    'imports': wd({
                    }),
                    'algorithms': wd({
                        "createFountainPen": ['constructor', {
                            'data': ['null', null],
                            'dependencies': wd({
                                // "serializeLeafType": {
                                //     'type': ['callback', {
                                //         'context': ['import', "glossary"],
                                //         'callback': "SerializeLeafType"
                                //     }],
                                // },
                            }),
                            'result': {
                                'type': ['callback', {
                                    'callback': "SerializeAlgorithmReference"
                                }],
                            }
                        }],
                        "createWriter": ['constructor', {
                            'data': ['null', null],
                            'dependencies': wd({
                                // "serializeLeafType": {
                                //     'type': ['callback', {
                                //         'context': ['import', "glossary"],
                                //         'callback': "SerializeLeafType"
                                //     }],
                                // },
                            }),
                            'result': {
                                'type': ['callback', {
                                    'callback': "SerializeAlgorithmReference"
                                }],
                            }
                        }],
                        // "smallerThan": ['algorithm', {
                        //     'type': ['function', {
                        //         'function': "SmallerThan"
                        //     }],
                        // }],
                        // "greaterThan": ['algorithm', {
                        //     'type': ['function', {
                        //         'function': "GreaterThan"
                        //     }],
                        // }],
                        // "equal": ['algorithm', {
                        //     'type': ['function', {
                        //         'function': "Equal"
                        //     }],
                        // }],
                        // "or": ['algorithm', {
                        //     'type': ['function', {
                        //         'function': "Or"
                        //     }],
                        // }],
                        // "not": ['algorithm', {
                        //     'type': ['function', {
                        //         'function': "Not"
                        //     }],
                        // }],
                        // "isZero": ['algorithm', {
                        //     'type': ['function', {
                        //         'function': "IsZero"
                        //     }],
                        // }],
                    })
                },
            },
            'implementation': {}

        },
    }),
    'main': "main"
}