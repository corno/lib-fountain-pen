import * as pr from 'pareto-core-raw'
import {
    reference,
    string,
    typeReference,
    interfaceReference,
    method, dictionary, group, member, taggedUnion, types, func, data, type
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands.p"

import { algorithm, constructor, definitionReference, } from "lib-pareto-typescript-project/dist/submodules/moduleDefinition/shorthands.p"

import * as mmoduleDefinition from "lib-pareto-typescript-project/dist/submodules/moduleDefinition"

const d = pr.wrapRawDictionary

export const $: mmoduleDefinition.T.ModuleDefinition = {
    'glossary': {
        'imports': d({
            "common": "glo-pareto-common"
        }),
        'parameters': d({}),
        'types': d({
            "Configuration": type(group({
                "indentation": member(string()),
                "newline": member(string()),
            })),
            "Nodes": type(dictionary(string())),
            "SuperfluousNode": type(group({
                "path": member(reference("common", "Path")),
                "name": member(string()),
            })),
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
            "FountainPen": func(typeReference("common", "Null"), interfaceReference("Block"), interfaceReference("WriteString"), null),
            "GetNodes": func(typeReference("common", "Path"), null, null, data(typeReference("Nodes"), true)),
            "CreateSuperfluousNodeMessage": func(typeReference("SuperfluousNode"), null, null, data(typeReference("common", "String"), false)),
            "CreateWriter": func(typeReference("common", "Path"),interfaceReference("Writer"), null, null),
            "CreateWriteStream": func(typeReference("common", "Path"),interfaceReference("WriteString"), null, null),
            "ReportSuperfluousNode": func(typeReference("SuperfluousNode"), null, null, null),
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
                "joinNestedStrings": definitionReference("tostring", {}, "JoinNestedStrings"),
                "getArrayAsString": definitionReference("tostring", {}, "GetArrayAsString"),
            })),
            "createWriter": algorithm(definitionReference("CreateWriter"), constructor(null, {
                "onError": definitionReference("common", {}, "Log"),
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