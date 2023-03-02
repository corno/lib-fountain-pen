import * as pd from 'pareto-core-data'

import {
    null_,
    array,
    string,
    reference,
    boolean,
    typeReference,
    dictionary, group, member, taggedUnion, types, func, data, interfaceReference, inf, method, type, context, glossaryParameter, parametrizedTypeReference, parametrizedReference
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands"

import * as gglossary from "lib-pareto-typescript-project/dist/submodules/glossary"

const d = pd.d

export const $: gglossary.T.Glossary<pd.SourceLocation> = {
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
                    'context': ['local', null],
                    'interface': "Line"
                }], true),
                "line": method(typeReference("common", "String")),
            })
        }],
        "Line": ['group', {
            'members': d({
                "indent": method(null, ['reference', {
                    'context': ['local', null],
                    'interface': "Block"
                }], true),
                "snippet": method(typeReference("common", "String")),
            })
        }],
        "Directory": ['group', {
            'members': d({
                "allowed": method(typeReference("common", "String")),
                "file": method(typeReference("common", "String"), ['reference', {
                    'context': ['local', null],
                    'interface': "Block"
                }], true),
                "directory": method(typeReference("common", "String"), ['reference', {
                    'context': ['local', null],
                    'interface': "Directory"
                }], true),
            })
        }],
        "WriteString": method(typeReference("common", "String")),
    }),
    'functions': d({
        "FountainPen": func(typeReference("common", "Null"), interfaceReference("Block"), interfaceReference("WriteString"), null),
        "GetNodes": func(typeReference("common", "Path"), null, null, data(typeReference("Nodes"), true)),
        "CreateSuperfluousNodeMessage": func(typeReference("SuperfluousNode"), null, null, data(typeReference("common", "String"), false)),
        "CreateDirectory": func(typeReference("common", "Path"),interfaceReference("Directory"), null, null),
        "CreateFile": func(typeReference("common", "Path"),interfaceReference("Block"), null, null),
        "CreateWriteStream": func(typeReference("common", "Path"),interfaceReference("WriteString"), null, null),
        "ReportSuperfluousNode": func(typeReference("SuperfluousNode"), null, null, null),
    }),
}