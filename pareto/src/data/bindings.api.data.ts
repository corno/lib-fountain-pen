import * as pd from 'pareto-core-data'

import { algorithm, constructor, functionReference } from "lib-pareto-typescript-project/dist/submodules/api/shorthands"

import * as gapi from "lib-pareto-typescript-project/dist/submodules/api"

const d = pd.d

export const $: gapi.T.API<pd.SourceLocation> = {
    'algorithms': d({
        "createDirectory": algorithm(functionReference("this", {}, "CreateDirectory")),
        "createFile": algorithm(functionReference("this", {}, "CreateFile")),
    }),
}