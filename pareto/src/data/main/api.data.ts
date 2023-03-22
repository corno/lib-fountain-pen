import * as pd from 'pareto-core-data'

import { afunction, algorithm, dependent, sfunction, sconstructor, sSideEffect, data, sbuilder } from "lib-pareto-typescript-project/dist/submodules/project/shorthands"

import * as g_project from "lib-pareto-typescript-project/dist/submodules/project"

const d = pd.d

export const $: g_project.T.ModuleDefinition.api.root<pd.SourceLocation> = {
    'algorithms': d({
        "createFountainPen": algorithm(sbuilder("this", {}, "FountainPen"), {}, dependent(data("this", {}, "Configuration"), {
            "joinNestedStrings": sfunction("tostring", {}, "JoinNestedStrings"),
            "getArrayAsString": sfunction("tostring", {}, "GetArrayAsString"),
        }, {})),
        "createDirectoryCreator": algorithm(sconstructor("this", {}, "CreateDirectoryCreator"), {}, dependent(null, {
            "getNodes": afunction("fs", {}, "ReadDirectoryOrAbort"),
            "pipeFountainPen": sbuilder("this", {}, "FountainPen"),
        }, {})),
        "createFileCreator": algorithm(sconstructor("this", {}, "CreateFileCreator"), {}, dependent(null, {
            "pipeFountainPen": sbuilder("this", {}, "FountainPen"),
        }, {
        })),
        "createSuperfluousNodeMessage": algorithm(sfunction("this", {}, "CreateNodeMessage")),
        "createAllowedNodeMessage": algorithm(sfunction("this", {}, "CreateNodeMessage")),
    }),
}