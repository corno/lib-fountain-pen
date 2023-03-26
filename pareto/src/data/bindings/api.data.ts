import * as pd from 'pareto-core-data'

import { algorithm, dependent, procedure, sSideEffect } from "lib-pareto-typescript-project/dist/submodules/project/shorthands"

import * as g_project from "lib-pareto-typescript-project/dist/submodules/project"

const d = pd.d

export const $: g_project.T.ModuleDefinition.api.root<pd.SourceLocation> = {
    'algorithms': d({
        "createDirectory": algorithm(procedure("main", {}, "CreateDirectory")),
        // "createFileCreator": algorithm(procedure("main", {}, "CreateFile")),
         "fountainPen": algorithm(procedure("main", {}, "FountainPen")),
    }),
}