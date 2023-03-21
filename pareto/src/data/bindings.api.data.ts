import * as pd from 'pareto-core-data'

import { algorithm, dependent, sconstructor, sSideEffect } from "lib-pareto-typescript-project/dist/submodules/project/shorthands"

import * as g_project from "lib-pareto-typescript-project/dist/submodules/project"

const d = pd.d

export const $: g_project.T.ModuleDefinition.api.root<pd.SourceLocation> = {
    'algorithms': d({
        "createDirectoryCreator": algorithm(sconstructor("main", {}, "CreateDirectory"), {}, dependent(null, {}, {
            "report": sSideEffect("main", {}, "Report"),
        })),
        "createFileCreator": algorithm(sconstructor("main", {}, "CreateFile"), {}, dependent(null, { }, {
            "onWriteFileError": sSideEffect("main", {}, "OnWriteFileError"),
        })),
        "fountainPen": algorithm(sconstructor("main", {}, "FountainPen")),
    }),
}