import * as pd from 'pareto-core-data'

import { algorithm, constructor, functionReference, typeReference} from "lib-pareto-typescript-project/dist/submodules/project/shorthands"

import * as g_project from "lib-pareto-typescript-project/dist/submodules/project"

const d = pd.d

export const $: g_project.T.Module.api.root<pd.SourceLocation> = {
    'algorithms': d({
        "fountainPen": algorithm(functionReference("this", {}, "FountainPen")),
        "createUnboundFountainPen": algorithm(functionReference("this", {}, "FountainPen"), constructor(typeReference("this", {}, "Configuration"), {
            "joinNestedStrings": functionReference("tostring", {}, "JoinNestedStrings"),
            "getArrayAsString": functionReference("tostring", {}, "GetArrayAsString"),
        })),
        "createUnboundDirectoryCreator": algorithm(functionReference("this", {}, "UnboundCreateDirectory"), constructor(null, {
            "createWriteStream": functionReference("this", {}, "CreateWriteStream"),
            "pipeFountainPen": functionReference("this", {}, "FountainPen"),
            "getNodes": functionReference("fs", {}, "ReadDirectoryOrAbort"),
        })),
        "createUnboundFileCreator": algorithm(functionReference("this", {}, "UnboundCreateFile"), constructor(null, {
            "createWriteStream": functionReference("this", {}, "CreateWriteStream"),
            "pipeFountainPen": functionReference("this", {}, "FountainPen"),
        })),
        "createSuperfluousNodeMessage": algorithm(functionReference("this", {}, "CreateNodeMessage")),
        "createAllowedNodeMessage": algorithm(functionReference("this", {}, "CreateNodeMessage")),
    }),
}