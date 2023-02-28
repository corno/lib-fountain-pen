import * as pd from 'pareto-core-data'

import { algorithm, constructor, functionReference, typeReference} from "lib-pareto-typescript-project/dist/submodules/api/shorthands"

import * as gapi from "lib-pareto-typescript-project/dist/submodules/api"

const d = pd.d

export const $: gapi.T.API<pd.SourceLocation> = {
    'imports': d({
        "tostring": "res-pareto-tostring",
        "common": "glo-pareto-common",
        "this": "./glossary",
    }),
    'algorithms': d({
        "fountainPen": algorithm(functionReference("this", {}, "FountainPen")),
        "createUnboundFountainPen": algorithm(functionReference("this", {}, "FountainPen"), constructor(typeReference("this", {}, "Configuration"), {
            "joinNestedStrings": functionReference("tostring", {}, "JoinNestedStrings"),
            "getArrayAsString": functionReference("tostring", {}, "GetArrayAsString"),
        })),
        "createDirectory": algorithm(functionReference("this", {}, "CreateDirectory"), constructor(null, {
            "onError": functionReference("common", {}, "Log"),
            "reportSuperfluousNode": functionReference("this", {}, "ReportSuperfluousNode"),
        })),
        "createFile": algorithm(functionReference("this", {}, "CreateFile"), constructor(null, {
            "onError": functionReference("common", {}, "Log"),
        })),
        "createUnboundDirectoryCreator": algorithm(functionReference("this", {}, "CreateDirectory"), constructor(null, {
            "createWriteStream": functionReference("this", {}, "CreateWriteStream"),
            "pipeFountainPen": functionReference("this", {}, "FountainPen"),
            "getNodes": functionReference("this", {}, "GetNodes"),
            "reportSuperfluousNode": functionReference("this", {}, "ReportSuperfluousNode"),
        })),
        "createUnboundFileCreator": algorithm(functionReference("this", {}, "CreateFile"), constructor(null, {
            "createWriteStream": functionReference("this", {}, "CreateWriteStream"),
            "pipeFountainPen": functionReference("this", {}, "FountainPen"),
        })),
        "createSuperfluousNodeMessage": algorithm(functionReference("this", {}, "CreateSuperfluousNodeMessage")),
    })
}