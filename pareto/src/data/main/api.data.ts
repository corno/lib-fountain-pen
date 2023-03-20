import * as pd from 'pareto-core-data'

import { afunction, algorithm, dependent, sfunction, sconstructor, sSideEffect, data } from "lib-pareto-typescript-project/dist/submodules/project/shorthands"

import * as g_project from "lib-pareto-typescript-project/dist/submodules/project"

const d = pd.d

export const $: g_project.T.ModuleDefinition.api.root<pd.SourceLocation> = {
    'algorithms': d({
        "createFountainPen": algorithm(sconstructor("this", {}, "FountainPen"), dependent(data("this", {}, "Configuration"), {
            "joinNestedStrings": sfunction("tostring", {}, "JoinNestedStrings"),
            "getArrayAsString": sfunction("tostring", {}, "GetArrayAsString"),
        }, {})),
        "createDirectoryCreator": algorithm(sconstructor("this", {}, "CreateDirectory"), dependent(null, {
            "getNodes": afunction("fs", {}, "ReadDirectoryOrAbort"),
            "pipeFountainPen": sconstructor("this", {}, "FountainPen"),
        }, {
            "createWriteStream": sSideEffect("this", {}, "CreateWriteStream"),
            "reportNodes": sSideEffect("this", {}, "ReportNodes"),
        })),
        "createFileCreator": algorithm(sconstructor("this", {}, "CreateFile"), dependent(null, {
            "pipeFountainPen": sconstructor("this", {}, "FountainPen"),
        }, {
            "createWriteStream": sSideEffect("this", {}, "CreateWriteStream"),
        })),
        "createSuperfluousNodeMessage": algorithm(sfunction("this", {}, "CreateNodeMessage")),
        "createAllowedNodeMessage": algorithm(sfunction("this", {}, "CreateNodeMessage")),
    }),
}