import * as pd from 'pareto-core-data'

import * as g_project from "lib-pareto-typescript-project/dist/submodules/project"

import { $ as api } from "./api.data"
import { $ as glossary } from "./glossary.data"
import { external, main, sibling, tempSubmodule, this_ } from 'lib-pareto-typescript-project/dist/submodules/project/shorthands'

const d = pd.d

export const $: g_project.T.Module<pd.SourceLocation> = {
    'definition': {
        'glossary': {
            'root': glossary,
            'imports': d({
                "typelibrary": sibling("typelibrary"),
                "common": external("glo-pareto-common"),
                // "fs": external("res-pareto-filesystem"),
                // //"this": this_(),
                "main": main(),
            }),
        },
        'api': {
            'root': api,

            'imports': d({
                // "common": external("glo-pareto-common"),
                // "fs": external("lib-pareto-filesystem"),
                // "tostring": external("res-pareto-tostring"),
                "this": this_(),
            }),
        },
    },
    'implementation': ['typescript', null],

}