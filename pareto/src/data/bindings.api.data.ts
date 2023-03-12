import * as pd from 'pareto-core-data'

import { algorithm, constructor, functionReference } from "lib-pareto-typescript-project/dist/submodules/project/shorthands"

import * as g_project from "lib-pareto-typescript-project/dist/submodules/project"

const d = pd.d

export const $: g_project.T.Module.api.root<pd.SourceLocation> = {
    'algorithms': d({
        "createDirectory": algorithm(functionReference("this", {}, "CreateDirectory")),
        "createFile": algorithm(functionReference("this", {}, "CreateFile")),
    }),
}