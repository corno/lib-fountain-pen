import * as pd from 'pareto-core-data'

import { afunction, algorithm, data, dependent, procedure, sfunction } from "lib-pareto-typescript-project/dist/submodules/project/shorthands"

import * as g_project from "lib-pareto-typescript-project/dist/submodules/project"

const d = pd.d

export const $: g_project.T.ModuleDefinition.api.root<pd.SourceLocation> = {
    'algorithms': d({
        "createFountainPen": algorithm(procedure("this", {}, "FountainPen"), {}, dependent(data("this", {}, "Configuration"), {
            "joinNestedStrings": sfunction("tostring", {}, "JoinNestedStrings"),
            "getArrayAsString": sfunction("tostring", {}, "GetArrayAsString"),
        }, {})),
        "createDirectoryCreator": algorithm(procedure("this", {}, "CreateDirectoryCreator"), {}, dependent(null, {
            "getNodes": afunction("fs", {}, "ReadDirectoryOrAbort"),
            "pipeFountainPen": procedure("this", {}, "FountainPen"),
        }, {})),
        "createFileCreator": algorithm(procedure("this", {}, "CreateFileCreator"), {}, dependent(null, {
            "pipeFountainPen": procedure("this", {}, "FountainPen"),
        }, {
        })),
        "createSuperfluousNodeMessage": algorithm(sfunction("this", {}, "CreateNodeMessage")),
        "createAllowedNodeMessage": algorithm(sfunction("this", {}, "CreateNodeMessage")),
    }),
}