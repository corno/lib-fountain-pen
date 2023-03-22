import * as pd from 'pareto-core-data'

import { algorithm, dependent, sbuilder, sconstructor, sSideEffect } from "lib-pareto-typescript-project/dist/submodules/project/shorthands"

import * as g_project from "lib-pareto-typescript-project/dist/submodules/project"

const d = pd.d

export const $: g_project.T.ModuleDefinition.api.root<pd.SourceLocation> = {
    'algorithms': d({
        "createDirectoryCreator": algorithm(sbuilder("main", {}, "CreateDirectory"), {}, dependent(null, {}, {
            "report": sSideEffect("main", {}, "Report"),
        })),
        "createFileCreator": algorithm(sbuilder("main", {}, "CreateFile"), {}, dependent(null, { }, {
            "onWriteFileError": sSideEffect("main", {}, "OnWriteFileError"),
        })),
        "fountainPen": algorithm(sbuilder("main", {}, "FountainPen")),
    }),
}