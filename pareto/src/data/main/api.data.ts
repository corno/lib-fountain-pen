import * as pd from 'pareto-core-data'

import { algorithm, typeReference, syncFunc, syncFunctionReference } from "lib-pareto-typescript-project/dist/submodules/project/shorthands"

import * as g_project from "lib-pareto-typescript-project/dist/submodules/project"

const d = pd.d

export const $: g_project.T.ModuleDefinition.api.root<pd.SourceLocation> = {
    'algorithms': d({
        "fountainPen": algorithm(syncFunc("this", {}, "FountainPen")),
        "createUnboundFountainPen": algorithm(functionReference("this", {}, "FountainPen"), constructor(typeReference("this", {}, "Configuration"), {
            "joinNestedStrings": syncFunctionReference("tostring", {}, "JoinNestedStrings"),
            "getArrayAsString": syncFunctionReference("tostring", {}, "GetArrayAsString"),
        })),
        "createUnboundDirectoryCreator": algorithm(bldrRef("this", {}, "CreateDirectory"), constructor(null, {
            "createWriteStream": bldrRef("this", {}, "CreateWriteStream"),
            "pipeFountainPen": syncFunctionReference("this", {}, "FountainPen"),
            "reportNodes": bldrRef("this", {}, "ReportNodes"),
            "getNodes": syncFunctionReference("fs", {}, "ReadDirectoryOrAbort"),
        })),
        "createUnboundFileCreator": algorithm(bldrRef("this", {}, "CreateFile"), constructor(null, {
            "createWriteStream": bldrRef("this", {}, "CreateWriteStream"),
            "pipeFountainPen": syncFunctionReference("this", {}, "FountainPen"),
        })),
        "createSuperfluousNodeMessage": algorithm(functionReference("this", {}, "CreateNodeMessage")),
        "createAllowedNodeMessage": algorithm(functionReference("this", {}, "CreateNodeMessage")),
        "createDirectoryCreator": algorithm(bldrRef("this", {}, "CreateDirectory"), constructor(null, {
            "report": bldrRef("this", {}, "Report"),
        })),
        "createFileCreator": algorithm(bldrRef("this", {}, "CreateFile"), constructor(null, {
            "onWriteFileError": bldrRef("this", {}, "OnWriteFileError"),
        })),
    }),
}