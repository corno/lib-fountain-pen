import * as pd from 'pareto-core-data'

import { afunction, algorithm, data, dependent, procedure, sfunction } from "lib-pareto-typescript-project/dist/submodules/project/shorthands"

import * as g_project from "lib-pareto-typescript-project/dist/submodules/project"

const d = pd.d

export const $: g_project.T.ModuleDefinition.api.root<pd.SourceLocation> = {
    'algorithms': d({
        "serializeBlock": algorithm(procedure("this", { }, "SerializeBlock"), { "Annotation": "Annotation" }),
        "serializeDirectory": algorithm(procedure("this", { }, "SerializeDirectory"), { "Annotation": "Annotation" }),
        "nestedLine": algorithm(sfunction("this", {}, "NestedLine"), { "Annotation": "Annotation" }),
        "line": algorithm(sfunction("this", {}, "Line"), { "Annotation": "Annotation" }),
        "indent": algorithm(sfunction("this", {}, "Indent"), { "Annotation": "Annotation" }),
        "snippet": algorithm(sfunction("this", {}, "Snippet"), { "Annotation": "Annotation" }),
        "directory": algorithm(sfunction("this", {}, "Directory"), { "Annotation": "Annotation" }),
        "file": algorithm(sfunction("this", {}, "File"), { "Annotation": "Annotation" }),
        "template": algorithm(sfunction("this", {}, "Template"), { "Annotation": "Annotation" }),
        "allowedManual": algorithm(sfunction("this", {}, "AllowedManual"), { "Annotation": "Annotation" }),
        "allowedGenerated": algorithm(sfunction("this", {}, "AllowedGenerated"), { "Annotation": "Annotation" }),
    }),
}